import sql from "better-sqlite3";
const db = sql("job.db");

import ReviewInterface from "../interface/ReviewInterface";

export function getAllReviews(): ReviewInterface[] {
  const reviews = db.prepare("SELECT * FROM reviews").all();
  return reviews as ReviewInterface[];
}
