"use client";
import digikala from "@/app/assets/brands/digikala.png";
import amazon from "@/app/assets/brands/amazon.png";
import adobe from "@/app/assets/brands/adobe.png";
import aparat from "@/app/assets/brands/aparat.png";
import bazar from "@/app/assets/brands/bazar.png";
import microsoft from "@/app/assets/brands/microsoft.png";
import parspack from "@/app/assets/brands/parspack.png";
import snapp from "@/app/assets/brands/snapp.png";
import SingleBrand from "./SingleBrand";
import { useState, useEffect } from "react";

const companyBrands = [
  {
    title: "Digikala company",
    logo: digikala,
  },
  {
    title: "Amazon company",
    logo: amazon,
  },
  {
    title: "adobe company",
    logo: adobe,
  },
  {
    title: "aparat company",
    logo: aparat,
  },
  {
    title: "bazar company",
    logo: bazar,
  },
  {
    title: "microsoft company",
    logo: microsoft,
  },
  {
    title: "parspack company",
    logo: parspack,
  },
  {
    title: "snapp company",
    logo: snapp,
  },
];
export default function Brands() {
  const [visibleBrands, setVisibleBrands] = useState(companyBrands);

  useEffect(() => {
    const updateVisibleBrands = () => {
      if (window.innerWidth < 600) {
        setVisibleBrands(companyBrands.slice(0, 4));
      } else if (window.innerWidth < 768) {
        setVisibleBrands(companyBrands.slice(0, 6));
      } else {
        setVisibleBrands(companyBrands);
      }
    };

    updateVisibleBrands();

    window.addEventListener("resize", updateVisibleBrands);
    return () => window.removeEventListener("resize", updateVisibleBrands);
  }, []);
  return (
    <section className="bg-secondary py-4 px-2 lg:px-4 2xl:px-8 2xl:py-6 flex justify-between items-center gap-2 md:gap-4 lg:gap-10 2xl:gap-12">
      {visibleBrands.map((brand) => (
        <SingleBrand
          key={brand.title}
          company={brand.title}
          logo={brand.logo}
        />
      ))}
    </section>
  );
}
