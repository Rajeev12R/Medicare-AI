import { NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs/promises"

const jsonFilePath = path.join(process.cwd(), "public", "medical-history.json")

async function readRecords() {
  try {
    const data = await fs.readFile(jsonFilePath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    // If the file doesn't exist, return an empty array
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return []
    }
    throw error
  }
}

async function writeRecords(records: any) {
  await fs.writeFile(jsonFilePath, JSON.stringify(records, null, 2))
}

export async function GET() {
  try {
    const records = await readRecords()
    return NextResponse.json(records)
  } catch (error) {
    console.error("Failed to read medical records:", error)
    return NextResponse.json(
      { error: "Failed to retrieve records" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const newRecord = await req.json()
    const records = await readRecords()

    // Add a new ID and date
    newRecord.id =
      records.length > 0 ? Math.max(...records.map((r: any) => r.id)) + 1 : 1
    newRecord.date = new Date().toISOString().split("T")[0] // YYYY-MM-DD

    records.push(newRecord)
    await writeRecords(records)

    return NextResponse.json(newRecord, { status: 201 })
  } catch (error) {
    console.error("Failed to save medical record:", error)
    return NextResponse.json(
      { error: "Failed to save record" },
      { status: 500 }
    )
  }
}
