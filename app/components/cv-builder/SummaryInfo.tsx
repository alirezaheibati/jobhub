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
      <p>
        <span>Job title: </span>
        <span>{currentJob}</span>
      </p>
      <p>
        <span>Employment status: </span>
        <span>{employmentStatus}</span>
      </p>
      <p>
        <span>Last Job: </span>
        <span>{lastJob}</span>
      </p>
      <p>
        <span>Last Degree: </span>
        <span>{degree}</span>
      </p>
    </div>
  );
}
