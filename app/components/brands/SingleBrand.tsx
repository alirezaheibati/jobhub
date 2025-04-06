import Image, { StaticImageData } from "next/image";
interface brandProps {
  company: string;
  logo: StaticImageData;
}
export default function SingleBrand({ company, logo }: brandProps) {
  return (
    <div>
      <Image src={logo} alt={company} className="w-full" />
    </div>
  );
}
