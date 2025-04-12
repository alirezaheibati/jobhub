import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryInfo from "./CategoryInfo";

export default function PopularCats() {
  return (
    <div className=" p-3 grid grid-cols-2 grid-rows-4 gap-2 w-full max-w-[400px] mx-auto md:grid-cols-4 md:grid-rows-2 md:max-w-[808px]">
      <div className="col-span-2 row-span-2 aspect-square flex flex-col justify-between items-start border-[6px] border-white shadow-lg rounded-lg p-4">
        <CategoryInfo
          title="Design & Development"
          description="focuses on creating, refining, and implementing innovative solutions, blending creativity with technical expertise"
          isMainCat={true}
        />
      </div>
      <div className=" aspect-square flex flex-col justify-between items-start border-[6px] border-white shadow-lg rounded-lg p-2">
        <CategoryInfo
          title="Real States"
          description="involves roles focused on buying, selling, managing, and developing properties, helping clients"
          isMainCat={false}
        />
      </div>
      <div className=" aspect-square flex flex-col justify-between items-start border-[6px] border-white shadow-lg rounded-lg p-2">
        <CategoryInfo
          title="Finance"
          description="focuses on managing money, investments, and financial planning, helping individuals achieve their financial goals"
          isMainCat={false}
        />
      </div>
      <div className=" aspect-square flex flex-col justify-between items-start border-[6px] border-white shadow-lg rounded-lg p-2">
        <CategoryInfo
          title="Delivery Services"
          description="focuses on transporting goods efficiently and safely, ensuring timely deliveries while maintaining customer satisfaction"
          isMainCat={false}
        />
      </div>
      <div className=" aspect-square flex flex-col justify-between items-start border-[6px] border-white shadow-lg rounded-lg p-2">
        <CategoryInfo
          title="Market Analysis"
          description="focuses on researching and interpreting market trends, consumer behavior, and competitive landscapes to provide actionable insights"
          isMainCat={false}
        />
      </div>
    </div>
  );
}
