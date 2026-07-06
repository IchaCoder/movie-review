import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

type CreateReviewBody = {
  movieId?: string;
  author?: string;
  rating?: number;
  comment?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateReviewBody;

    const movieId = body.movieId?.trim();
    const author = body.author?.trim();
    const comment = body.comment?.trim();
    const rating = Number(body.rating);

    if (!movieId || !ObjectId.isValid(movieId)) {
      return NextResponse.json({ error: "A valid movie ID is required." }, { status: 400 });
    }

    if (!author) {
      return NextResponse.json({ error: "Your name is required." }, { status: 400 });
    }

    if (!comment) {
      return NextResponse.json({ error: "A review comment is required." }, { status: 400 });
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("movie-api-db");
    const moviesCollection = db.collection("movies");
    const reviewsCollection = db.collection("reviews");

    const movie = await moviesCollection.findOne({ _id: new ObjectId(movieId) });

    if (!movie) {
      return NextResponse.json({ error: "Movie not found." }, { status: 404 });
    }

    const insertedReview = await reviewsCollection.insertOne({
      movieId,
      author,
      rating,
      comment,
      createdAt: new Date(),
    });

    await moviesCollection.updateOne(
      { _id: new ObjectId(movieId) },
      {
        $addToSet: {
          reviewIds: insertedReview.insertedId.toHexString(),
        },
      },
    );

    return NextResponse.json(
      {
        id: insertedReview.insertedId.toHexString(),
        movieId,
        author,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: "Failed to save review." }, { status: 500 });
  }
}
