import React from "react";
import Button from "../Button";
import clsx from "clsx";

interface PaginationButtonProps {
  //   children: React.ReactNode;
  number: number;
  active?: boolean;
}

const PaginationButton = ({
  number,
  active = false,
}: PaginationButtonProps) => {
  return (
    <Button
      textClass={clsx(active && "text-primary")}
      contentClass="p-0.5 px-2 "
    >
      <div className="flex items-center gap-4">
        <span>{number}</span>
      </div>
    </Button>
  );
};

export const Pagination = () => {
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
