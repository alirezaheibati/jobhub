type HeroBtnProps = {
  title: string;
  fillStatus: boolean;
  linkTo: string;
};
export default function HeroBtn({ title, fillStatus, linkTo }: HeroBtnProps) {
  return (
    <a
      href={linkTo}
      className={`${
        fillStatus ? "bg-primary text-slate-50" : "bg-slate-50 text-primary"
      } text-sm lg:text-base py-2 rounded-full border-2 border-primary w-[140px] sm:w-[160px] flex justify-center items-center active:scale-95`}
    >
      {title}
    </a>
  );
}
