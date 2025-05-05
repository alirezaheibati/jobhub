import SummaryItem from "./SummaryItem";

interface SummaryInfoProps {
  name: string;
  degree: string;
  currentJob: string;
  employmentStatus: string;
  lastJob: string;
}
export default function SummaryInfo({
  name,
  degree,
  currentJob,
  employmentStatus,
  lastJob,
}: SummaryInfoProps) {
  return (
    <div className="[&_span:first-of-type]:text-gray-500 [&_span:first-of-type]:text-sm [&_span:last-of-type]:font-semibold [&_span:last-of-type]:text-primary [&_p]:py-1">
      <h2 className="font-semibold text-2xl text-primary mb-4">{name}</h2>
      <div className="flex justify-between items-center flex-wrap">
        <SummaryItem title="Job title: " description={currentJob} />
        <SummaryItem
          title="Employment status: "
          description={employmentStatus}
        />
        <SummaryItem title="Last Job: " description={lastJob} />
        <SummaryItem title="Last Degree: " description={degree} />
      </div>
    </div>
  );
}
