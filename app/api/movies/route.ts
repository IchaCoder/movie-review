import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("movie-api-db");
    const moviesCollection = db.collection("movies");

    const movies = await moviesCollection.find({}).toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}
