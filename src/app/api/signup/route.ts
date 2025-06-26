import { connectDB } from "@/lib/db"
import User from "@/models/User"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json()
    await connectDB()

    const user = await User.findOne({ email, isVerified: false })

    if (!user) {
      return NextResponse.json(
        { message: "User not found or already verified." },
        { status: 404 }
      )
    }

    if (!user.otp || !user.otpExpires) {
      return NextResponse.json(
        { message: "OTP not requested for this user." },
        { status: 400 }
      )
    }

    if (new Date() > user.otpExpires) {
      return NextResponse.json({ message: "OTP has expired." }, { status: 410 })
    }

    const isOtpValid = await bcrypt.compare(otp, user.otp)

    if (!isOtpValid) {
      return NextResponse.json({ message: "Invalid OTP." }, { status: 400 })
    }

    user.isVerified = true
    user.otp = null
    user.otpExpires = null
    await user.save()

    return NextResponse.json(
      { message: "User verified successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error during user verification:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
