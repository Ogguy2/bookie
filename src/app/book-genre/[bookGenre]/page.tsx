"use client";
import { selfDevelopment } from "@/app/data/datas";
import BookSearchFilter from "@/components/BookSearch";
import BreadCrumb from "@/components/BreadCrumb";
import Icon from "@/components/Icon";
import DefaultPageLayout from "@/components/layout/DefaultPageLayout";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { LiaStarSolid } from "react-icons/lia";
import Button from "@/components/Button";
import { RiResetLeftFill } from "react-icons/ri";
import { Pagination } from "@/components/Table/Pagination";
import BookCard from "@/components/bookCard/BookCard";
import BookCategory from "@/components/BookCategory";

const Page = () => {
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
      {/* Crumb */}
      <div className="border-b border-[#d5d5d5]">
        <div className="max-w-[1500px]  py-6 space-y-6 mx-auto">
          <BreadCrumb data={usePathname()} />
          {/* Book category */}
          <BookCategory />
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1500px] flex mx-auto">
          <div className=" border-r border-[#d5d5d5]">
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
            {/* Book list  */}
            <div className={"grid grid-cols-4 gap-x-10 gap-y-20 "}>
              {selfDevelopment.data.map((item, index) => {
                return <BookCard key={index} data={item} />;
              })}
              {selfDevelopment.data.map((item, index) => {
                return <BookCard key={index} data={item} />;
              })}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
};

export default Page;
