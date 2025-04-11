import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface JobInfoProps {
  icon: IconProp;
  info: string;
}
export default function JobInfo({ icon, info }: JobInfoProps) {
  return (
    <p>
      <FontAwesomeIcon icon={icon} />
      <span className="ml-[2px]"> {info}</span>
    </p>
  );
}
