import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Job from "./Job";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAllFeaturedJobs } from "@/app/lib/featured-jobs";

export default function FeaturedJobs() {
  const featuredJobs = getAllFeaturedJobs();
  return (
    <section className="bg-slate-100 py-16">
      <div className="w-full">
        <h2 className="text-center w-full text-primary text-3xl md:text-4xl font-bold relative z-20 mb-1">
          Featured Jobs
        </h2>
        <p className="w-full text-center text-sm px-4">
          Hand-picked jobs featured depending on popularity and benefits
        </p>
      </div>
      <div className="flex justify-center xl:flex-nowrap items-stretch flex-wrap gap-3 pt-4 lg:pt-16">
        {featuredJobs.map((job) => (
          <Job key={job.id} featuredJob={job} />
        ))}
      </div>
      <button className="block mx-auto bg-primary text-slate-50 rounded-full py-2 px-6 mt-12">
        <span className="mr-2">Find More Jobs</span>
        <FontAwesomeIcon icon={faArrowRight} className="translate-y-[1px]" />
      </button>
    </section>
  );
}
