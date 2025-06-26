import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import User from "@/models/User"
import { connectDB } from "@/lib/db"

function formatAddress(tags: any) {
  // Compose a readable address from OSM tags
  return (
    [
      tags?.["addr:housenumber"],
      tags?.["addr:street"],
      tags?.["addr:suburb"],
      tags?.["addr:city"],
      tags?.["addr:state"],
      tags?.["addr:postcode"],
    ]
      .filter(Boolean)
      .join(", ") || "Address not available"
  )
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and longitude are required." },
      { status: 400 }
    )
  }

  const latitude = parseFloat(lat)
  const longitude = parseFloat(lng)

  try {
    await connectDB()

    // 1. Search for registered doctors in the database
    const doctors = await User.find({
      role: "doctor",
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000, // 10 kilometers
        },
      },
    })

    let providers = doctors.map((doc) => ({
      name: doc.name,
      address: doc.address || "Address not available",
      phone: doc.phoneNumber,
      specialty: doc.specialty || "Registered Doctor",
      lat: doc.location?.coordinates?.[1],
      lng: doc.location?.coordinates?.[0],
    }))

    // 2. If no doctors are found, use Overpass API for real hospitals
    if (providers.length === 0) {
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="hospital"](around:5000,${latitude},${longitude});out;`
      const overpassRes = await fetch(overpassUrl)
      const overpassData = await overpassRes.json()

      providers = (overpassData.elements || []).map((el: any) => ({
        name: el.tags?.name || "Unknown Hospital",
        address: formatAddress(el.tags),
        phone: el.tags?.phone || "",
        specialty: el.tags?.["healthcare:speciality"] || "Hospital",
        lat: el.lat,
        lng: el.lon,
      }))
      // Sort by distance (optional, since Overpass already sorts by proximity)
    }

    return NextResponse.json({ providers })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to find providers" },
      { status: 500 }
    )
  }
}
