import React from "react";
import clsx from "clsx";
import ImageCard from "../ImageCard";

interface BookCardProps {
  type: string;
  imageSize: "sm" | "md" | "lg" | "auto";
  data?: any;
}

const BookCard = ({ data, imageSize = "md", type = "v" }: BookCardProps) => {
  return (
    <div className="flex-1 space-y-3 relative">
      {/* REDUCTIONS */}
      <div
        className={clsx(
          data.new || data.reduction > 0 ? "visible" : "invisible",
          data.new ? "bg-[#015738]" : "bg-[#ce1235]",
          "absolute top-3 z-20 right-3 px-4 py-1  text-white"
        )}
      >
        {data.new ? "New" : "-" + data.reduction + "%"}
      </div>

      <div className="space-y-6 flex h-full justify-between flex-col">
        {/* book detail */}
        <div className="space-y-1 w-full">
          <div>
            <ImageCard size={imageSize} image={data.image} className="" />
          </div>
          <div className="font-semibold">{data.title}</div>
          <div className="font-light">{data.author}</div>
        </div>
        {/* PRICE DETAIL */}
        <div className="w-full flex items-center justify-between ">
          <div className="text-primary font-bold">${data.price}</div>
          <div className="border px-5 py-2 rounded-full">Buy</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
