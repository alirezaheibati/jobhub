"use client";
import SingleReview from "./SingleReview";
import Dots from "./Dots";
import { useState } from "react";
import ReviewInterface from "@/app/interface/ReviewInterface";
interface ReviewsProps {
  reviews: ReviewInterface[];
}
export default function Reviews({ reviews }: ReviewsProps) {
  const [activeDot, setActiveDot] = useState(2);

  function dotsSelectHandler(dotNumber: number) {
    setActiveDot(dotNumber);
  }

  return (
    <div className="h-screen relative overflow-x-hidden flex justify-center items-start flex-col gap-12 md:gap-16">
      <div className="w-full">
        <h2 className="text-center w-full text-primary text-3xl md:text-4xl font-bold relative z-20 mb-1">
          Insights From Connect Users
        </h2>
        <p className="w-full text-center text-secondary text-lg">
          Success Experience
        </p>
      </div>
      <div className=" absolute left-0 top-0 h-full w-full bg-custom-gradient md:z-10"></div>
      <div
        className={`flex justify-around items-stretch  w-[500vw] md:w-[231vw] md:px-[33vw] transition-transform duration-300 -translate-x-[${
          activeDot * 100
        }vw] md:-translate-x-[${activeDot * 33}vw]`}
      >
        {reviews.map((review) => (
          <SingleReview
            key={review.id}
            activeStatus={activeDot === review.id - 1}
            review={review}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-2 relative z-20">
        {reviews.map((review) => (
          <Dots
            key={review.id}
            dotNumber={review.id - 1}
            onSelectDot={dotsSelectHandler}
            activeDot={activeDot === review.id - 1}
          />
        ))}
      </div>
    </div>
  );
}
