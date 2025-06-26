import mongoose, { Schema, model, models, Document } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  password: string
  phoneNumber: string
  role: "patient" | "doctor"
  isVerified: boolean
  otp?: string | null
  otpExpires?: Date | null
  createdAt: Date
  updatedAt: Date
  location?: {
    type: "Point"
    coordinates: [number, number] // [longitude, latitude]
  }
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["patient", "doctor"],
      default: "patient",
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpires: {
      type: Date,
      default: null,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: false,
      },
      coordinates: {
        type: [Number],
        required: false,
      },
    },
  },
  { timestamps: true }
)

userSchema.index({ location: "2dsphere" })

const User = models.User || model<IUser>("User", userSchema)

export default User
