import Brands from "./components/brands/Brands";
import FeaturedJobs from "./components/featured-job/FearuredJobs";
import Hero from "./components/hero/Hero";
import TopNav from "./components/nav/TopNav";
import ReviewsWrapper from "./components/reviews/ReviewsWrapper";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Hero />
      <Brands />
      <ReviewsWrapper />
      <FeaturedJobs />
    </div>
  );
}
