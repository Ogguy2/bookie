import React from "react";
import Link from "next/link";
import clsx from "clsx";
import ImageCard from "./ImageCard";
import { BookProps } from "@/app/data/typeDatas";
interface SectionProps {
  title: string;
  link: string;
  data: BookProps[];
  horizontal?: boolean;
  children?: React.ReactNode;
}

const HomeSectionBook = ({ title, data, children, link, horizontal = true }: SectionProps) => {
  return (
    <div className="px-10 w   space-y-6">
      <div className="flex w-full items-center  justify-between">
        <div className="text-3xl font-semibold">{title}</div>
        <div className="text-sm font-light">
          <Link href={link}>View more</Link>
        </div>
      </div>
      <div className={"grid grid-cols-4 gap-10 bg-white "}>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex-1 space-y-3 relative">
              {/* REDUCTIONS */}
              <div
                className={clsx(
                  item.new || item.reduction > 0 ? "visible" : "invisible",
                  item.new ? "bg-[#015738]" : "bg-[#ce1235]",
                  "absolute top-3 z-20 right-3 px-4 py-1  text-white"
                )}>
                {item.new ? "New" : "-" + item.reduction + "%"}
              </div>

              <div className="space-y-6 flex h-full justify-between flex-col">
                {/* book detail */}
                <div className="space-y-1 w-full">
                  <div>
                    <ImageCard size="sm" image={item.image} className="" />
                  </div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="font-light">{item.author}</div>
                </div>
                {/* PRICE DETAIL */}
                <div className="w-full flex items-center justify-between ">
                  <div className="text-primary font-bold">${item.price}</div>
                  <div className="border px-5 py-2 rounded-full">Buy</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default HomeSectionBook;
