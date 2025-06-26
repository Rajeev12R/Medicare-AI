const path = require("path");

async function getUserModel() {
  const mod = await import(path.resolve(__dirname, "../src/models/User.js"));
  return mod.default;
}

async function getConnectDB() {
  const mod = await import(path.resolve(__dirname, "../src/lib/db.js"));
  return mod.connectDB;
}

async function fixOriginalReportUrls() {
  const connectDB = await getConnectDB();
  await connectDB();
  const User = await getUserModel();

  const users = await User.find({ "medicalHistory.originalReportUrl": { $exists: true, $ne: null } });

  for (const user of users) {
    let updated = false;
    for (const record of user.medicalHistory) {
      if (record.originalReportUrl && record.originalReportUrl.includes("/")) {
        // Extract just the filename
        const parts = record.originalReportUrl.split("/");
        record.originalReportUrl = parts[parts.length - 1];
        updated = true;
      }
    }
    if (updated) {
      await user.save();
      console.log(`Updated user ${user._id}`);
    }
  }

  console.log("Done updating originalReportUrl fields.");
  process.exit(0);
}

fixOriginalReportUrls().catch((err) => {
  console.error(err);
  process.exit(1);
}); 