import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
interface CompanyInfoProps {
  company: string;
  logo: string;
  location: string;
}
export default function CompanyInfo({
  company,
  logo,
  location,
}: CompanyInfoProps) {
  return (
    <div className="flex justify-start items-center gap-2 my-6 ">
      <Image
        src={logo}
        alt={company}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full border-2 p-2"
      />
      <div className="flex flex-col justify-start items-start">
        <p>{company}</p>
        <p className=" text-gray-600 text-xs">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="ml-[2px]"> {location}</span>
        </p>
      </div>
    </div>
  );
}
