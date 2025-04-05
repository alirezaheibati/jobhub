import HeroBtn from "./HeroBtn";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full lg:w-2/5 h-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary">
        Find your dream job,
        <br /> Job that fits your life
      </h2>
      <p className="text-center w-4/5 text-sm text-gray-700">
        Search and find your dream job now easier than ever, you can simply
        browse and find the job you want
      </p>
      <div className="flex justify-center items-centers gap-2 sm:gap-4 pt-4 lg:pt-8 flex-wrap">
        <HeroBtn
          title="Apply for Job"
          fillStatus
          linkTo="/projects/jobhob/apply"
        />
        <HeroBtn
          title="Create your CV"
          fillStatus={false}
          linkTo="/projects/jobhob/cv"
        />
      </div>
    </div>
  );
}
