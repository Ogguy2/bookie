import Image from "next/image";
import React from "react";
import clsx from "clsx";
const BookCard = ({data, line, vericalAlignn, size}) => {
  return (
    <div className="flex-1    space-y-3 relative">
      <div className={clsx(data.new ? "bg-[#015738]" : "bg-[#ce1235]", "absolute top-3 z-20 right-0 px-4 py-1  text-white")}>
        {data.new ? "New" : data.reduction}
      </div>
      {/* IMAGE */}
      <div className="px-6">
        <div className="space-y-1 w-full">
          <div className="relative h-[300px]">
            <Image loading="lazy" alt="ddd" fill={true}  className={clsx(" bg-cover ")} src={data.image} />
          </div>
          {/* TITLE */}
          <div className="font-semibold">{data.title}</div>
          <div className="font-light">{data.author}</div>
        </div>
        <div>{data.author}</div>
        <div className="w-full flex items-center justify-between ">
          <div className="text-primary font-bold">${data.price}</div>
          <div className="border px-5 py-2 rounded-full">Buy</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
