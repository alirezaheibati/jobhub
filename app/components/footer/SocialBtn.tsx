import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialBtn({ icon }: { icon: IconProp }) {
  return (
    <Link
      href={"#"}
      className="bg-white/25 w-10 h-10 rounded-xl flex justify-center items-center hover:text-secondary"
    >
      <FontAwesomeIcon icon={icon} className="text-xl" />
    </Link>
  );
}
