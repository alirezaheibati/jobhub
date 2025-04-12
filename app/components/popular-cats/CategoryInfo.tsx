import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface CategoryInfoProps {
  title: string;
  description: string;
  isMainCat: boolean;
}
export default function CategoryInfo({
  title,
  description,
  isMainCat,
}: CategoryInfoProps) {
  return (
    <>
      <div>
        <h2
          className={`font-semibold line-clamp-1 text-primary mb-1 ${
            isMainCat ? "text-2xl " : "text-base "
          }`}
        >
          {title}
        </h2>
        <p className={`${isMainCat ? "text-sm " : "text-xs "} line-clamp-3`}>
          {description}
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-sm text-primary">
          <FontAwesomeIcon icon={faCircle} className="text-[8px] mr-1" />
          49 Jobs
        </p>
        <button className="bg-primary text-slate-50 w-8 h-8 rounded-full">
          <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
        </button>
      </div>
    </>
  );
}
