import React from "react";
import Icon from "./Icon";
import { GoHome } from "react-icons/go";

interface BreadCrump {
  data: string;
}
const BreadCrumb = ({ data }: BreadCrump) => {
  return (
    <div className="flex w-full  text-sm items-center gap-x-2 ">
      <Icon size="sm">
        <GoHome />
      </Icon>
      <span>Home</span>
      {data
        .replace("/", " ")
        .trim()
        .split("/")
        .map((element, index) => {
          return (
            <div key={index} className="font-light gap-x-2 flex items-center ">
              <span>/ </span>
              <span>{element}</span>
            </div>
          );
        })}
    </div>
  );
};

export default BreadCrumb;
