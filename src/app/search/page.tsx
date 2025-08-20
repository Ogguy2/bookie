"use client";
import { selfDevelopment } from "@/app/data/datas";
import BookSearchFilter from "@/components/BookSearch";
import BreadCrumb from "@/components/BreadCrumb";
import Icon from "@/components/Icon";
import ImageCard from "@/components/ImageCard";
import DefaultPageLayout from "@/components/layout/DefaultPageLayout";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { LiaStarSolid } from "react-icons/lia";
import Button from "@/components/Button";
import { RiResetLeftFill } from "react-icons/ri";
import PaginationButton from "@/components/Table/Pagination";
import Link from "next/link";

const SearchPage = () => {
  const { q } = useSearchParams();
  // 

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
  const dd = [
    { title: "Top rated", selected: false },
    { title: "BestSellers", selected: true },
    { title: "New releases", selected: true },
    { title: "Sale", selected: false },
  ];
  // const handleGotoSubGenre = (genre: string) => {};
  //

  return (
    <DefaultPageLayout>
      {/* BREAD CRUMB */}
      <div className="border-b border-[#d5d5d5]">
        <div className="max-w-[1500px]  py-6 space-y-6 mx-auto">
          <BreadCrumb search data={usePathname()} />
          <div className="text-4xl font-bold font-playfair">
            Results for {useSearchParams().get("q")}
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1500px] flex mx-auto">
          <div className=" border-r border-[#d5d5d5]">
            <LeftSearchComponent bookType={bookType} saleType={saleType} language={language} />
          </div>
          <div className="flex-1 py-3 px-10 ">
            <div className="border-b border-[#d5d5d5] flex items-center space-x-3 mb-10">
              <div className="flex justify-between w-full items-end">
                <div className="flex items-end">
                  <Icon
                    size="md"
                    className={clsx(
                      "text-primary border-b border-b-primary p-4"
                    )}
                  >
                    <LiaStarSolid />
                  </Icon>
                  {dd.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={clsx(
                          item.selected && "border-b border-b-primary",
                          "p-4"
                        )}
                      >
                        {item.title}
                      </div>
                    );
                  })}
                </div>
                <div className=" flex items-end">
                  <Icon
                    size="md"
                    className={clsx(
                      "text-primary border-b border-b-primary p-4"
                    )}
                  >
                    <BsGrid3X3GapFill />
                  </Icon>
                  <Icon
                    size="md"
                    className={clsx(
                      "text-primary border-b border-b-primary p-4"
                    )}
                  >
                    <HiOutlineViewList />
                  </Icon>
                </div>
              </div>
            </div>
            <MaintPage />
            <Pagination />
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
};

export default SearchPage;

const LeftSearchComponent = ({bookType,saleType, language}) => {
  return (
    <>
      <div className="w-[260px] divide-y divide-[#d5d5d5]  ">
        <BookSearchFilter title="Book type" searhParams={bookType} />
        <BookSearchFilter title="Show only" searhParams={saleType} />
        <BookSearchFilter title="Language" searhParams={language} />
        <BookSearchFilter title="Book type" searhParams={bookType} />
      </div>
      <div className="mt-5">
        <Button contentClass="py-2 px-5">
          <div className="flex items-center gap-4">
            <RiResetLeftFill />
            <span>Reset Filter</span>
          </div>
        </Button>
      </div>
    </>
  );
};
const MaintPage = () => {
  return (
    <div className={"grid grid-cols-1 divide-amber-200 gap-y-20 "}>
      {selfDevelopment.data.map((item, index) => {
        return (
          <div key={index} className="flex-1 space-y-3 relative">
            {/* REDUCTIONS */}
            <div
              className={clsx(
                item.new || item.reduction > 0 ? "visible" : "invisible",
                item.new ? "bg-[#015738]" : "bg-[#ce1235]",
                "absolute top-3 z-20 right-3 px-4 py-1  text-white"
              )}
            >
              {item.new ? "New" : "-" + item.reduction + "%"}
            </div>
            <div className=" flex space-y-6  h-full justify-between ">
              {/* book detail */}
              <div className="space-y-1 w-full">
                <div>
                  <ImageCard size="md" image={item.image} className="" />
                </div>
                <div className="font-semibold">{item.title}</div>
                <div className="font-light">{item.author}</div>
              </div>
              {/* PRICE DETAIL */}
              <div className="w-full flex flex-1 items-center justify-between ">
                <div>{item.resume}</div>
                <div className="text-primary font-bold">${item.price}</div>
                <div className="border px-5 py-2 rounded-full">Buy</div>
              </div>
            </div>
          </div>
        );
      })}
      {selfDevelopment.data.map((item, index) => {
        return (
          <div key={index} className="flex-1 space-y-3 relative">
            {/* REDUCTIONS */}
            <div
              className={clsx(
                item.new || item.reduction > 0 ? "visible" : "invisible",
                item.new ? "bg-[#015738]" : "bg-[#ce1235]",
                "absolute top-3 z-20 right-3 px-4 py-1  text-white"
              )}
            >
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
  );
};
const Pagination = (): React.ReactNode => {
  return (
    <div className="relative my-10 flex w-full justify-around">
      <Button contentClass="py-2 px-4">
        <div className="flex items-center gap-4">
          <span>Load more books</span>
        </div>
      </Button>
      <div className="absolute left-0 top-1/2 space-x-1 -translate-y-1/2">
        <PaginationButton number={1} active />
        <PaginationButton number={2} />
        <PaginationButton number={3} />
        <PaginationButton number={4} />
      </div>
    </div>
  );
};
