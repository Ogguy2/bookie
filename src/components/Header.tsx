import React from "react";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import clsx from "clsx";
import { Geist } from "next/font/google";
import { BiSearch } from "react-icons/bi";
import { GoBook, GoBookmark, GoHome, GoNorthStar } from "react-icons/go";
import { MdOutlineBook } from "react-icons/md";
import { SlBasket, SlEarphones } from "react-icons/sl";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface MenuProps {
  title: string;
  icon: React.ReactNode;
}
export default function Header() {
  const menu: MenuProps[] = [
    {
      title: "Home",
      icon: (
        <Icon size="md">
          <GoHome />
        </Icon>
      ),
    },
    {
      title: "New releases",
      icon: (
        <Icon size="md">
          <GoNorthStar />
        </Icon>
      ),
    },
    {
      title: "Recommandations",
      icon: (
        <Icon size="md">
          <GoHome />
        </Icon>
      ),
    },
    {
      title: "Books",
      icon: (
        <Icon size="md">
          <GoBook />
        </Icon>
      ),
    },
    {
      title: "AudioBooks",
      icon: (
        <Icon size="md">
          <SlEarphones />
        </Icon>
      ),
    },
    {
      title: "Ebooks",
      icon: (
        <Icon size="md">
          <MdOutlineBook />
        </Icon>
      ),
    },
  ];
  return (
    <div className="shadow-xs">
      <div className="w-full flex py-3 max-w-[1500px] mx-auto  shadow justify-between items-center">
        {/* LOGO */}
        <div className="">
          <Logo size="sm" />
        </div>
        {/* SEARCH */}
        <div className="">
          <div className="bg-amber-300 h-[40px] flex">
            <div className="h-full w-[300px]">
              <input className="border-0 w-full focus:ring-0  bg-[#ebebe5]" type="text" name="" id="" />
            </div>
            <div className="h-full">
              <button className="bg-primary h-full w-[40px] flex items-center justify-around">
                <Icon size="sm">
                  <BiSearch className="text-white" />
                </Icon>
              </button>
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="flex items-center border p-3">
          $35.19
          <Icon size="sm">
            <SlBasket className="" />
          </Icon>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className={clsx(geistSans.className, "py-3 max-w-[1500px] mx-auto")}>
        <div className="flex justify-between  w-full">
          {menu.map((items, number) => (
            <Link href={"/"} key={number} >
              <div className="hover:text-primary transition-discrete flex items-center gap-2">
                <span className="flex">{items.icon}</span>
                <span className=" font-semibold">{items.title}</span>
              </div>
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <span className="flex">
              <Icon size="md">
                <GoBookmark className="text-primary" />
              </Icon>
            </span>
            <span className="text-primary font-semibold">Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
}
