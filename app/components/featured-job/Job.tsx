import FeaturedJobInterface from "@/app/interface/FeaturedJobInterface";
import {
  faCircleDollarToSlot,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";
import JobInfo from "./JobInfo";
import CompanyInfo from "./CompanyInfo";
import ApplyBtn from "../UI/ApplyBtn";
export default function Job({
  featuredJob,
}: {
  featuredJob: FeaturedJobInterface;
}) {
  return (
    <div className="border-[6px] mb-3 border-white shadow-lg rounded-lg bg-slate-50 px-4 pt-8 pb-6 w-[95%] max-w-[280px]">
      <div className="flex justify-start items-center gap-2 flex-wrap">
        {featuredJob.skills.split(", ").map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      <h2 className="font-semibold text-xl py-2 text-primary line-clamp-1">
        {featuredJob.title}
      </h2>
      <div className="flex justify-start items-center gap-4 text-gray-600 text-sm mb-2">
        <JobInfo
          icon={faCircleDollarToSlot}
          info={`$${featuredJob.salary} / week`}
        />
        <JobInfo icon={faClockRotateLeft} info={`${featuredJob.shift}`} />
      </div>
      <CompanyInfo
        company={featuredJob.company}
        logo={featuredJob.logo}
        location={featuredJob.location}
      />
      <ApplyBtn>Apply Position</ApplyBtn>
    </div>
  );
}
