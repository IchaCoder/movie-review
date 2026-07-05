import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const client = new MongoClient(uri);

const clientPromise = globalForMongo._mongoClientPromise ?? (globalForMongo._mongoClientPromise = client.connect());

export default clientPromise;
