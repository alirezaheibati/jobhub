import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

type SideNavItemProps = {
  title: string;
  icon: IconDefinition; // React element type
  linkTo: string;
};

export default function SideNavItem({ icon, title, linkTo }: SideNavItemProps) {
  return (
    <li
      className={`mb-4 text-xl hover:opacity-90 flex justify-start items-center gap-4 text-slate-50`}
    >
      <FontAwesomeIcon icon={icon} className="text-base" />
      <Link href={linkTo}>{title}</Link>
    </li>
  );
}
