import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
interface CvBoxProps {
  children: ReactNode;
}
export default function CvBox({ children }: CvBoxProps) {
  return (
    <section className=" border border-primary border-l-8 p-8 relative rounded-lg group shadow-lg mb-6 last:mb-0">
      <button className="text-secondary text-lg font-semibold justify-start items-center gap-1 absolute right-4 top-4 hidden group-hover:flex">
        <FontAwesomeIcon icon={faPen} />
        Edit
      </button>
      {children}
    </section>
  );
}
