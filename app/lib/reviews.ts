import { db } from "@/initdb";
import ReviewInterface from "../interface/ReviewInterface";

export function getAllReviews(): ReviewInterface[] {
  const reviews = db.prepare("SELECT * FROM reviews").all();
  return reviews as ReviewInterface[];
}
