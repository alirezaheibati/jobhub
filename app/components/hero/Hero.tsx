import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-slate-100 flex justify-start items-end flex-col-reverse lg:flex-row w-full h-[calc(100vh-64px)] md:h-[calc(100vh-106px)]">
      <HeroImage />
      <HeroContent />
    </section>
  );
}
