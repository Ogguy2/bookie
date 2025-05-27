import { Collapsible } from "radix-ui";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Icon from "./Icon";
const BookSearch = ({ searhParams, title }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className=" py-3 pr-3 ">
      <Collapsible.Root className="" open={open} onOpenChange={setOpen}>
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-xl">{title}</div>
          <Collapsible.Trigger asChild>
            <button className=" flex items-center">
              <Icon className="hover:bg-[#807f7a28] p-2 rounded-2xl hover:cursor-pointer" size="sm">{open ? <IoIosArrowUp className="text-[#807f7a]" /> : <IoIosArrowDown className="text-[#807f7a]" />}</Icon>
            </button>
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          <div className="mt-3 space-y-3">
            {searhParams.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    readOnly
                    className="p-2 checked:bg-primary bg-[#f5f5f2] border border-[#807f7a]"
                    checked={item.selected}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="">{item.title}</div>
                  <div className="font-light text-[#807f7a]">({item.booksNumbre})</div>
                </div>
              );
            })}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default BookSearch;
