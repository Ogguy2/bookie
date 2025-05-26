import React from "react";
import clsx from "clsx";
import ImageCard from "./ImageCard";
import { BookProps } from "@/app/data/typeDatas";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type RecommandationCardProps = {
  data: BookProps;
  type?: "sm" | "lg";
};
export default function RecommandationCard({ data, type = "lg" }: RecommandationCardProps) {
  return (
    <div className={"flex-1 pr-10   space-y-3 relative"}>
      {/* REDUCTIONS */}
      <div
        className={clsx(
          data.new || data.reduction > 0 ? "visible" : "invisible",
          data.new ? "bg-[#015738]" : "bg-[#ce1235]",
          "absolute top-3 z-20 right-3 px-4 py-1  text-white"
        )}>
        {data.new ? "New" : "-" + data.reduction + "%"}
      </div>
      <div className="space-y-6 flex h-full justify-between flex-col">
          {/* BOOK DETAILS */}
        <div className="space-y-1 w-full">
          <div>
            <ImageCard size="sm" image={data.image} className="" />
          </div>
          <div className="font-semibold line-clamp-2">{data.title}</div>
          <div className="font-light">{data.author}</div>
        </div>
          {/* PRICE DETAILS */}
        <div className="w-full flex items-center justify-between ">
          <div className="text-primary font-bold">$100</div>
          <div className="border px-5 py-2 rounded-full">Buy</div>
        </div>
      </div>
    </div>
  );
}
