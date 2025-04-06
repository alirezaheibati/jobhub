import logo from "../../assets/images/JobHub-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCircleQuestion,
  faFile,
  faHome,
  faUserCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SideNavItem from "./SideNavItem";
import Image from "next/image";

export default function SideNav({
  menuVisibility,
  onCloseNav,
}: {
  menuVisibility: boolean;
  onCloseNav: () => void;
}) {
  return (
    <div
      className={`h-full w-full z-[1001] fixed top-0 right-0 text-slate-50 ${
        menuVisibility ? "translate-x-0" : "-translate-x-full"
      } ${
        !menuVisibility ? " transition-transform" : " transition-none"
      } duration-300`}
    >
      <div
        className={`h-full w-full bg-black/60 absolute right-0 top-0 z-10 transition-none ${
          !menuVisibility ? " opacity-0" : " opacity-100"
        }`}
        onClick={onCloseNav}
      ></div>
      <div
        className={`h-full w-full max-w-[350px] bg-[#252c62] relative z-20 overflow-hidden flex justify-center flex-col items-end ${
          menuVisibility ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="bg-slate-50 h-full aspect-square rounded-full absolute -right-1/4 -top-3/4"></div>
        <button
          className="text-slate-900 absolute right-2 top-2 text-3xl z-50"
          onClick={onCloseNav}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Image
          src={logo}
          alt="site logo"
          className="absolute left-2 top-8 w-3/4 h-auto"
        />
        <div className="w-full pt-48 grow relative text-slate-100 px-4 flex flex-col justify-start items-start">
          <ul>
            <SideNavItem
              title={"Home"}
              icon={faHome}
              linkTo={"/projects/jobhob"}
            />
            <SideNavItem
              title={"Create CV"}
              icon={faFile}
              linkTo={"/projects/jobhob/cv"}
            />
            <SideNavItem
              title={"Apply for job"}
              icon={faUserCheck}
              linkTo={"/projects/jobhob/apply"}
            />
            <SideNavItem
              title={"FAQs"}
              icon={faCircleQuestion}
              linkTo={"/projects/jobhob/FAQs"}
            />
            <SideNavItem
              title={"Contact"}
              icon={faAddressBook}
              linkTo={"/projects/jobhob/contact"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
