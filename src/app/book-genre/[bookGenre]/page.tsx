"use client";
import { selfDevelopment } from "@/app/data/datas";
import BookSearch from "@/components/BookSearch";
import BreadCrumb from "@/components/BreadCrumb";
import ImageCard from "@/components/ImageCard";
import DefaultPageLayout from "@/components/layout/DefaultPageLayout";
import clsx from "clsx";
import { usePathname, useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { bookGenre } = useParams();

  const subGenre = [
    {
      title: "Finding hapiness",
    },
    {
      title: "Career",
    },
    {
      title: "Self-confidence",
    },
    { title: "Motivation" },
    {
      title: "Career",
    },
  ];

  // search parems
  interface BookType {
    title: string;
    selected: boolean;
    booksNumbre: number;
  }
  const bookType: BookType[] = [
    {
      title: "Book",
      selected: true,
      booksNumbre: 1200,
    },
    {
      title: "E-Book",
      selected: false,
      booksNumbre: 850,
    },
    {
      title: "Audiobook",
      selected: false,
      booksNumbre: 620,
    },
  ];

  const saleType = [
    {
      title: "New releases",
      selected: true,
      booksNumber: 1200,
    },
    {
      title: "Sales",
      selected: false,
      booksNumber: 1200,
    },
    {
      title: "Coming soon",
      selected: false,
      booksNumber: 1200,
    },
    {
      title: "Best sellers",
      selected: false,
      booksNumber: 1200,
    },
  ];
  const language = [
    {
      title: "English",
      selected: false,
      booksNumber: 1200,
    },
    {
      title: "French",
      selected: false,
    },
    {
      title: "Spanish",
      selected: false,
    },
  ];

  return (
    <DefaultPageLayout>
      {/* BREAD CRUMB */}
      <div className="border-b border-[#d5d5d5]">
        <div className="max-w-[1500px]  py-6 space-y-6 mx-auto">
          <BreadCrumb data={usePathname()} />
          <div className="text-4xl font-bold font-playfair">{bookGenre}</div>
          <div className="flex space-x-3">
            {subGenre.map((item, index) => {
              return (
                <div key={index} className="rounded-3xl border px-5 py-2  text-[#807f7a] border-[#807f7a] ">
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1500px] flex mx-auto">
          <div className="w-[260px] divide-y divide-[#d5d5d5] border-r border-[#d5d5d5]">
            <BookSearch title="Book type" searhParams={bookType} />
            <BookSearch title="Show only" searhParams={saleType} />
            <BookSearch title="Language" searhParams={language} />
            <BookSearch title="Book type" searhParams={bookType} />
          </div>
          <div className="flex-1 py-3 px-10">
            <div className={"grid grid-cols-4 gap-x-10 gap-y-20 "}>
              {selfDevelopment.map((item, index) => {
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
                          <ImageCard size="md" image={item.image} className="" />
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
              {selfDevelopment.map((item, index) => {
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
                          <ImageCard size="md" image={item.image} className="" />
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
              {selfDevelopment.map((item, index) => {
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
                          <ImageCard size="md" image={item.image} className="" />
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
              {selfDevelopment.map((item, index) => {
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
                          <ImageCard size="md" image={item.image} className="" />
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
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
};

export default Page;
