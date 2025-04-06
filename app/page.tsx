import Brands from "./components/brands/Brands";
import Hero from "./components/hero/Hero";
import TopNav from "./components/nav/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Hero />
      <Brands />
    </div>
  );
}
