import mongoose, { Schema, Document, models, Model } from "mongoose"

export interface IDoctorApplication extends Document {
  userEmail: string
  medicalCouncilRegistrationNumber: string
  mbbsCertificate: string
  pgDegree: string
  superSpecialtyDegree?: string
  governmentId: string
  professionalHeadshot: string
  fullName: string
  primarySpecialty: string
  yearsOfExperience: string
  clinicAddress: string
  consultationTimings: string
  consultationFees: string
  professionalBio: string
  servicesOffered: string[]
  languagesSpoken: string[]
  professionalEmail: string
  privateContactNumber: string
  panNumber: string
  bankAccountNumber: string
  ifscCode: string
  status: "pending" | "approved" | "rejected"
  agreedToTerms: boolean
}

const DoctorApplicationSchema: Schema<IDoctorApplication> = new Schema(
  {
    userEmail: { type: String, required: true },
    medicalCouncilRegistrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    mbbsCertificate: { type: String, required: true },
    pgDegree: { type: String, required: true },
    superSpecialtyDegree: { type: String },
    governmentId: { type: String, required: true },
    professionalHeadshot: { type: String, required: true },
    fullName: { type: String, required: true },
    primarySpecialty: { type: String, required: true },
    yearsOfExperience: { type: String, required: true },
    clinicAddress: { type: String, required: true },
    consultationTimings: { type: String, required: true },
    consultationFees: { type: String, required: true },
    professionalBio: { type: String, required: true },
    servicesOffered: [{ type: String }],
    languagesSpoken: [{ type: String }],
    professionalEmail: { type: String, required: true },
    privateContactNumber: { type: String, required: true },
    panNumber: { type: String, required: true },
    bankAccountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    agreedToTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
)

const DoctorApplication: Model<IDoctorApplication> =
  models.DoctorApplication ||
  mongoose.model<IDoctorApplication>(
    "DoctorApplication",
    DoctorApplicationSchema
  )

export default DoctorApplication
