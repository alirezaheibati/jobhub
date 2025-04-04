import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TopNavItemProps = {
  title: string;
  icon: IconDefinition; // React element type
  linkTo: string;
};

export default function TopNavItem({ title, icon, linkTo }: TopNavItemProps) {
  return (
    <li className={`group px-3 text-slate-700 font-[600]`}>
      <a href={linkTo}>
        <p>
          <FontAwesomeIcon icon={icon} className="text-sm mb-[2px] mr-1" />
          {title}
        </p>

        <div className="w-0 bg-slate-700 h-[2px] group-hover:w-full transition-width duration-300 ease-in-out"></div>
      </a>
    </li>
  );
}
