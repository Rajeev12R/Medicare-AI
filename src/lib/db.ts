import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return
    }
    if (!MONGO_URI) {
      console.error("MONGO_URI is not set")
      process.exit(1)
    }
    await mongoose.connect(MONGO_URI)
    console.log("🟢Connected to MongoDB")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

// --- Admin Seeder ---
// Run this manually (e.g. with ts-node or node) to seed admin users
if (require.main === module) {
  ;(async () => {
    await connectDB()
    const admins = [
      {
        name: "Admin 1",
        email: "admin1@example.com",
        phoneNumber: "+918360426936",
        password: "$2b$10$admin1hashedpasswordhere", // Replace with bcrypt hash
      },
      {
        name: "Admin 2",
        email: "admin2@example.com",
        phoneNumber: "+917355752539",
        password: "$2b$10$admin2hashedpasswordhere",
      },
      {
        name: "Admin 3",
        email: "admin3@example.com",
        phoneNumber: "+917269001165",
        password: "$2b$10$admin3hashedpasswordhere",
      },
      {
        name: "Admin 4",
        email: "admin4@example.com",
        phoneNumber: "+918840181025",
        password: "$2b$10$admin4hashedpasswordhere",
      },
    ]
    const User = (await import("@/models/User")).default
    await User.seedAdmins(admins)
    console.log("Admin users seeded.")
    process.exit(0)
  })()
}
