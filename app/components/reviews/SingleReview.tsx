import ReviewInterface from "@/app/interface/ReviewInterface";
import Image from "next/image";

interface SingleReviewProps {
  activeStatus: boolean;
  review: ReviewInterface;
}
export default function SingleReview({
  activeStatus,
  review,
}: SingleReviewProps) {
  return (
    <div
      className={`border-2 border-primary rounded-xl p-4 flex flex-col justify-between items-start transition-all duration-300 w-[80vw] md:w-[30vw] ${
        activeStatus ? "bg-sky-50 scale-110 md:scale-[1.15]" : " scale-100"
      }`}
    >
      <div>
        <div className="h-12 w-12 rounded-full border-2 p-2">
          <Image
            src={review.logo}
            alt={review.occupation}
            className="w-full"
            width={48}
            height={48}
          />
        </div>
        <p className={`my-3 line-clamp-4 `}>{review.review}</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <img
          src={review.avatar}
          alt={review.writer}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border-2"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold md:text-lg">{review.writer}</p>
          <p className="text-sm line-clamp-1">{review.occupation}</p>
        </div>
      </div>
    </div>
  );
}
