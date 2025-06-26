import mongoose, { Schema, model, models, Document, Model } from "mongoose"

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

// Add static method type to the model
interface IUserModel extends Model<IUser> {
  seedAdmins(
    admins: Array<{
      name: string
      email: string
      phoneNumber: string
      password: string
    }>
  ): Promise<void>
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

// Static method to seed admin users
userSchema.statics.seedAdmins = async function (
  admins: Array<{
    name: string
    email: string
    phoneNumber: string
    password: string
  }>
) {
  for (const admin of admins) {
    const exists = await this.findOne({ phoneNumber: admin.phoneNumber })
    if (!exists) {
      await this.create({
        ...admin,
        role: "admin",
        isVerified: true,
      })
    }
  }
}

const User =
  (models.User as IUserModel) || model<IUser, IUserModel>("User", userSchema)

export default User
