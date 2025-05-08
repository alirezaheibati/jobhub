import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillItemProps {
  title: string;
  removeable: boolean;
}
export default function SkillItem({ title, removeable }: SkillItemProps) {
  return (
    <p className="border rounded-md p-1 bg-slate-100 ">
      {title}
      {removeable && (
        <button>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-red-400 ml-2 hover:opacity-60"
          />
        </button>
      )}
    </p>
  );
}
