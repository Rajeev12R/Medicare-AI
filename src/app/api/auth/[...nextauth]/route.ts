import { connectDB } from "@/lib/db"
import User from "@/models/User"
import NextAuth, { AuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { generateOtp, sendOtp } from "@/lib/otp"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        emailOrPhone: { label: "Email or Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided.")
        }
        await connectDB()

        const user = await User.findOne({
          $or: [
            { email: credentials.emailOrPhone },
            { phoneNumber: credentials.emailOrPhone },
          ],
          isVerified: true,
        })

        if (!user) {
          throw new Error("No verified user found with this email or phone.")
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordCorrect) {
          throw new Error("Incorrect password.")
        }

        // Send OTP
        const otp = generateOtp()
        user.otp = await bcrypt.hash(otp, 10)
        user.otpExpires = new Date(new Date().getTime() + 10 * 60 * 1000) // 10 minutes
        await user.save()
        await sendOtp(user.phoneNumber, otp)

        // Instead of returning a user, throw a specific error
        // to prevent session creation and signal the client.
        throw new Error(`OTP_REQUIRED:${user.email}`)
      },
    }),
    CredentialsProvider({
      id: "otp",
      name: "OTP",
      credentials: {
        email: { label: "Email", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided.")
        }
        await connectDB()

        const user = await User.findOne({
          email: credentials.email,
          isVerified: true,
        })

        if (!user || !user.otp || !user.otpExpires) {
          throw new Error("OTP not requested or user not found.")
        }

        if (new Date() > user.otpExpires) {
          throw new Error("OTP has expired.")
        }

        const isOtpCorrect = await bcrypt.compare(credentials.otp, user.otp)

        if (!isOtpCorrect) {
          throw new Error("Invalid OTP.")
        }

        // Clear OTP fields after successful verification
        user.otp = null
        user.otpExpires = null
        await user.save()

        // Return the full user object to complete the sign-in
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          // You can add other user properties here
        }
      },
    }),
  ],
  pages: {
    signIn: "/", // Redirect to home page for login, as we use a modal
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // This callback now only runs on successful OTP verification
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
