import { db } from "@/initdb";
import FeaturedJobInterface from "../interface/FeaturedJobInterface";

export function getAllFeaturedJobs(): FeaturedJobInterface[] {
  const jobs = db.prepare("SELECT * FROM featured").all();
  return jobs as FeaturedJobInterface[];
}
