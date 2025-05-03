import Image from "next/image";
import logo from "../../assets/images/footer-logo.png";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialBtn from "./SocialBtn";
import PartnersItem from "./PartnersItem";
import NavItem from "./NavItems";
export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-12 flex justify-evenly items-start gap-8 text-slate-50">
      <div className="max-w-[30%]">
        <Image src={logo} alt="site logo" className="h-12 w-auto" height={48} />
        <p className="text-slate-50 my-6">
          Jobhub connects you with career opportunities tailored to your skills,
          relevance, and personal preferences.
        </p>
        <div className="text-slate-50 flex justify-start items-center gap-3">
          <SocialBtn icon={faTwitter} />
          <SocialBtn icon={faInstagram} />
          <SocialBtn icon={faFacebook} />
          <SocialBtn icon={faTelegram} />
        </div>
      </div>
      <div className="">
        <h2 className="text-secondary font-semibold text-2xl mb-2">
          Useful links
        </h2>
        <ul className="flex flex-col gap-2 justify-start items-start">
          <NavItem linkTo="#" title="Home" />
          <NavItem linkTo="#" title="Create CV" />
          <NavItem linkTo="#" title="Apply for job" />
          <NavItem linkTo="#" title="FAQs" />
          <NavItem linkTo="#" title="Contact us" />
        </ul>
      </div>
      <div className="">
        <h2 className="text-secondary font-semibold text-2xl mb-2">
          Main partners
        </h2>
        <ul className="flex flex-col gap-2 justify-start items-start">
          <PartnersItem partner={"Digikala"} />
          <PartnersItem partner={"Microsoft"} />
          <PartnersItem partner={"Apple Inc."} />
          <PartnersItem partner={"Snapp"} />
          <PartnersItem partner={"Adobe"} />
        </ul>
      </div>
    </footer>
  );
}
