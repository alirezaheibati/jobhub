import Brands from "./components/brands/Brands";
import FeaturedJobs from "./components/featured-job/FearuredJobs";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import TopNav from "./components/nav/TopNav";
import PopularContainer from "./components/popular-cats/PopularsContainer";
import ReviewsWrapper from "./components/reviews/ReviewsWrapper";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Features />
      <FeaturedJobs />
      <ReviewsWrapper />
      <PopularContainer />
      <Footer />
    </div>
  );
}
