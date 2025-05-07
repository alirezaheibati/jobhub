import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
interface CvBoxProps {
  children: ReactNode;
  title: string;
  icon: IconProp;
  editMode: boolean;
  onActiveEditMode: () => void;
}
export default function CvBox({
  children,
  title,
  icon,
  editMode,
  onActiveEditMode,
}: CvBoxProps) {
  return (
    <section
      className={`border border-primary border-l-8 pb-8 px-2 ${
        editMode ? "pt-24" : "pt-16"
      } md:px-8 relative rounded-lg group shadow-lg mb-6 last:mb-0 overflow-hidden`}
    >
      <div className="flex justify-start items-center gap-2 bg-slate-100 absolute left-0 top-0 right-0 pl-8 py-3">
        <FontAwesomeIcon icon={icon} />
        <h2 className="font-semibold">{title}</h2>
      </div>
      {editMode && (
        <button
          className="text-secondary text-lg font-semibold justify-start items-center gap-1 absolute right-4 top-14 hidden group-hover:flex"
          onClick={onActiveEditMode}
        >
          <FontAwesomeIcon icon={faPen} />
          Edit
        </button>
      )}
      {children}
    </section>
  );
}
