import React from "react";
import Icon from "./Icon";
import { GoHome } from "react-icons/go";

interface BreadCrump {
  data: string;
  search?: boolean;
}
const BreadCrumb = ({ data, search = false }: BreadCrump) => {
  return (
    <div className="flex w-full  text-sm items-center gap-x-2 ">
      {!search ? (
        <>
          <Icon className="opacity-50" size="sm">
            <GoHome />
          </Icon>
          <span>Home</span>
          {data
            .replace("/", " ")
            .trim()
            .split("/")
            .map((element, index) => {
              return (
                <div
                  key={index}
                  className="font-light gap-x-2 flex items-center "
                >
                  <span>/ </span>
                  <span>{decodeURIComponent(element)}</span>
                </div>
              );
            })}
        </>
      ) : (
        <>
          <Icon className="opacity-50" size="sm">
            <GoHome />
          </Icon>
          <span className="font-light">Search results</span>
        </>
      )}
    </div>
  );
};

export default BreadCrumb;
