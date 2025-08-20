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
import { Avatar, Flex } from "@radix-ui/themes";
import { SlDislike, SlLike } from "react-icons/sl";
import { CiFlag1 } from "react-icons/ci";

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
        <div className=" max-w-[1500px]  mx-auto">
          <div className="grid grid-cols-3">
            <div className="">d</div>
            <div className="col-span-2">
              {/* Auteur du livre */}
              <div className="space-y-2">
                <div className="text-4xl font-semibold">
                  The Power of Mindfulness
                </div>
                <div className="text-[#807f7a]">James Butter</div>
              </div>
              {/* Notation du roman */}
              <div className=""></div>
              {/* Resume du livre */}
              <div className="text-[#252520ff]">
                <p>
                  The Power of Mindfulness" by Sarah Mitchell is a
                  transformative guide that explores the profound impact of
                  mindfulness on our lives. In this motivational book, Mitchell
                  reveals how the practice of mindfulness can bring about a deep
                  sense of calm, clarity, and inner peace in our fast-paced,
                  distracted world.
                </p>
                <br />
                <p>
                  Drawing from personal experiences and scientific research,
                  Mitchell offers practical techniques and insightful teachings
                  to help readers cultivate mindfulness in their daily lives.
                  From simple mindfulness exercises to integrating mindfulness
                  into relationships, work, and everyday activities, this book
                  provides a comprehensive roadmap for harnessing the power of
                  the present moment
                </p>
              </div>
              {/* Order the book */}
              <div className=""></div>
            </div>
          </div>
          {/* Other book */}
          {/* Rating */}
          <Rating />
        </div>
      </div>
    </DefaultPageLayout>
  );
};

export default Page;

const Rating = () => {
  return (
    <div className="">
      {/* Comments */}
      <div className="flex justify-between w-full">
        <div className="text-2xl">Review</div>
        <div className="max-w-[700px] bg-amber-100 flex-1 flex justify-between ">
          {/* Generale note */}
          <div className="space-x">
            <div className="text-4xl ">
              <span className="font-semibold">4,8</span> /{" "}
              <span className="text-[#807f7a]">5</span>
            </div>
            <div className="text-[#807f7a] text-sm">483 avis</div>
            <div className="notation"></div>
          </div>
          {/*  */}
          <div className="">dazpdzadkop</div>
        </div>
        <div>d</div>
      </div>
      <div className=" divide-y divide-amber-500 max-w-[700px] mx-auto">
        <Comment
          auteur="Kouassi guy serge"
          note="note"
          date="21 Avril 2025"
          like="1"
          dislike="100"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sit
          architecto, iusto eligendi non delectus molestiae officiis. Odit
          maiores quae nisi voluptatibus harum. Voluptas animi earum sit iusto
          aliquam nihil?
        </Comment>
        <Comment
          auteur="Mamadou Aya"
          note="note"
          date="21 Avril 2025"
          like="1001"
          dislike="30"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sit
          architecto, iusto eligendi non delectus molestiae officiis. Odit
          maiores quae nisi voluptatibus harum. Voluptas animi earum sit iusto
          aliquam nihil?
        </Comment>
        <Comment
          auteur="Utilisateur 2022"
          note="note"
          date="21 Avril 2025"
          like="3like"
          dislike="3"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sit
          architecto, iusto eligendi non delectus molestiae officiis. Odit
          maiores quae nisi voluptatibus harum. Voluptas animi earum sit iusto
          aliquam nihil?
        </Comment>
      </div>
    </div>
  );
};
const BookType = ({ title }: { title: string }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      className={clsx(
        "",
        selected
          ? "text-primary border-primary"
          : "text-[#807f7a] border-[#807f7a]"
      )}
    >
      {title}
    </div>
  );
};

const Comment = ({ auteur, note, date, like, dislike, children }) => {
  return (
    <div className="py-4">
      <div className="flex py-4 items-center justify-between w-full">
        {/* Avatat */}
        <div className=" flex items-center gap-3">
          <Flex gap="2">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
              radius="full"
            />
          </Flex>

          <div className="">{auteur}</div>
        </div>
        {/* Cooment rate */}
        <div className="flex items-center gap-3">
          <div>{note}</div>
          <div className="text-[#807f7a]">{date}</div>
        </div>
      </div>
      <div className="px-6 ">
        <p className="py-4">{children}</p>
        <div className="flex py-2 items-center gap-3">
          <span className="flex items-center gap-1">
            <Icon size="md">
              <SlLike />
            </Icon>
            {like}
          </span>
          <span className="flex items-center gap-1">
            <Icon size="md">
              <SlDislike />
            </Icon>
            {dislike}
          </span>
          <span className="flex items-center gap-1">
            <Icon size="md">
              <CiFlag1 />
            </Icon>
            {dislike}
          </span>
        </div>
      </div>
    </div>
  );
};
