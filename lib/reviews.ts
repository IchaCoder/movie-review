import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export type ReviewRecord = {
  id: string;
  movieId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type ReviewDocument = {
  _id: ObjectId;
  movieId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: Date;
};

export async function getReviewsByIds(reviewIds: string[]) {
  if (reviewIds.length === 0) {
    return [] as ReviewRecord[];
  }

  const validReviewIds = reviewIds.filter((reviewId) => ObjectId.isValid(reviewId));

  if (validReviewIds.length === 0) {
    return [] as ReviewRecord[];
  }

  const client = await clientPromise;
  const db = client.db("movie-api-db");
  const reviewsCollection = db.collection<ReviewDocument>("reviews");

  const reviews = await reviewsCollection
    .find({ _id: { $in: validReviewIds.map((reviewId) => new ObjectId(reviewId)) } })
    .sort({ createdAt: -1 })
    .toArray();

  return reviews.map((review) => ({
    id: review._id.toHexString(),
    movieId: review.movieId,
    author: review.author,
    rating: review.rating,
    comment: review.comment,
    createdAt: review.createdAt.toISOString(),
  }));
}
