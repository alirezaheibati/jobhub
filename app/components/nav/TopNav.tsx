"use client";
import logo from "../../assets/images/JobHub-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faCircleQuestion,
  faFile,
  faHouseChimney,
  faRightToBracket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import NavSearchBox from "./NavSearchBox";
import TopNavItem from "./TopNavItem";
import { useState } from "react";
import SideNav from "./SideNav";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  const [showNav, setShowNav] = useState(false);

  function handleCloseNav() {
    setShowNav(false);
  }
  function handleShowNav() {
    setShowNav(true);
  }
  return (
    <>
      <SideNav menuVisibility={showNav} onCloseNav={handleCloseNav} />
      <nav className="bg-gray-100 p-3 pb-1 lg:px-6 w-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <Link href="#">
              <Image
                src={logo}
                alt="site logo"
                className="h-12 w-auto"
                height={48}
              />
            </Link>
            <NavSearchBox />
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-4 flex-row-reverse md:flex-row">
            <button className="text-gray-600 justify-start items-center gap-3 border-2 px-2 py-1 rounded-md border-gray-400 hidden md:flex">
              <FontAwesomeIcon icon={faRightToBracket} />
              <p className="font-[600]">Login | Register</p>
            </button>
            <button
              className="lg:text-3xl text-2xl md:hidden ml-2 md:ml-0"
              onClick={handleShowNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <ul className="mt-3 text-lg md:flex justify-start items-center hidden">
          <TopNavItem
            title={"Home"}
            icon={faHouseChimney}
            linkTo={"/projects/jobhob"}
          />
          <TopNavItem
            title={"Create CV"}
            icon={faFile}
            linkTo={"/projects/jobhob/cv"}
          />
          <TopNavItem
            title={"Apply for job"}
            icon={faUserCheck}
            linkTo={"/projects/jobhob/apply"}
          />
          <TopNavItem
            title={"FAQs"}
            icon={faCircleQuestion}
            linkTo={"/projects/jobhob/FAQs"}
          />
          <TopNavItem
            title={"Contact"}
            icon={faAddressBook}
            linkTo={"/projects/jobhob/contact"}
          />
        </ul>
      </nav>
    </>
  );
}
