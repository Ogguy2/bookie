import React from "react";
import Icon from "./Icon";
import { BiSearch } from "react-icons/bi";
import Logo from "./Logo";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f2]  divide-gray-300 ">
      <div className="flex max-w-[1500px] mx-auto  py-5 w-full items-center justify-between">
        <div className="">Let’s stay in touch! Sign up to our newsletter and get the best deals!</div>
        <div className="">
          <div className="">
            <div className=" h-[40px] flex">
              <div className="h-full w-[300px]">
                <input placeholder="Enter your email" className="border-0 w-full focus:ring-0  bg-[#ebebe5]" type="text" name="" id="" />
              </div>
              <div className="h-full">
                <button className="bg-primary h-full px-3  text-white flex items-center justify-around">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="grid grid-cols-2 py-10 max-w-[1500px] mx-auto ">
        {/* BOOKIE */}
        <div className="space-y-4">
          <div>
            <Logo size="sm" />
          </div>
          <div className=" space-x-4">
            <Icon size="md">
              <FaTwitter className="text-gray-500" />
            </Icon>
            <Icon size="md">
              <FaLinkedin className="text-gray-500" />
            </Icon>
            <Icon size="md">
              <FaInstagram className="text-gray-500" />
            </Icon>
          </div>
        </div>
        {/* NAV */}
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-1">
            <div className=" font-semibold">Help</div>
            <div className="text-gray-500">Faq</div>
            <div className="text-gray-500">Customers services</div>
            <div className="text-gray-500">How to guides</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold">Other</div>
            <div className="text-gray-500">Privacy policy</div>
            <div className="text-gray-500">Sitemap</div>
            <div className="text-gray-500">SubScriptions</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold">Contact us</div>
            <div className="text-transparent">nene</div>
            <div className="text-gray-500">+225 0789232318</div>
            <div className="text-transparent">none</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
