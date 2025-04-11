import sql from "better-sqlite3";
const db = sql("job.db");
import FeaturedJobInterface from "../interface/FeaturedJobInterface";

export function getAllFeaturedJobs(): FeaturedJobInterface[] {
  const jobs = db.prepare("SELECT * FROM featured").all();
  return jobs as FeaturedJobInterface[];
}
