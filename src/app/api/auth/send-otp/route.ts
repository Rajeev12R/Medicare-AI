import { connectDB } from "@/lib/db"
import { generateOtp, sendOtp } from "@/lib/otp"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

const passwordStrengthRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export async function POST(req: Request) {
  try {
    const { name, email, password, phoneNumber } = await req.json()

    if (!name || !email || !password || !phoneNumber) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      )
    }

    if (!passwordStrengthRegex.test(password)) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
        { status: 400 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    })

    if (existingUser && existingUser.isVerified) {
      return NextResponse.json(
        { message: "User with this email or phone number already exists." },
        { status: 409 }
      )
    }

    const otp = generateOtp()
    const hashedOtp = await bcrypt.hash(otp, 10)
    const otpExpires = new Date(new Date().getTime() + 10 * 60 * 1000) // 10 minutes from now

    if (existingUser) {
      // User exists but is not verified, update their info and OTP
      const hashedPassword = await bcrypt.hash(password, 10)
      existingUser.password = hashedPassword
      existingUser.name = name
      existingUser.phoneNumber = phoneNumber
      existingUser.otp = hashedOtp
      existingUser.otpExpires = otpExpires
      await existingUser.save()
    } else {
      // Create a new, unverified user
      const hashedPassword = await bcrypt.hash(password, 10)
      await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        otp: hashedOtp,
        otpExpires,
        isVerified: false,
      })
    }

    await sendOtp(phoneNumber, otp)

    return NextResponse.json(
      { message: "OTP sent successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending OTP:", error)
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    )
  }
} 