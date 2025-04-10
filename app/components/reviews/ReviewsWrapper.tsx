import { getAllReviews } from "@/app/lib/reviews";
import Reviews from "./Reviews";
import ReviewInterface from "@/app/interface/ReviewInterface";

export default function ReviewsWrapper() {
  const reviews = getAllReviews() as ReviewInterface[];
  return <Reviews reviews={reviews} />;
}
