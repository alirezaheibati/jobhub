import heroImg from "../../assets/images/job-bg.png";
export default function HeroImage() {
  return (
    <div className="lg:w-3/5 w-full sm:w-4/5 md:w-2/3 block mx-auto max-w-[800px]">
      <img src={heroImg.src} alt="Hero image" className="w-full" />
    </div>
  );
}
