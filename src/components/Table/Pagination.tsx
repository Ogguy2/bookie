import React from "react";
import Button from "../Button";
import clsx from "clsx";

interface PaginationButtonProps {
  //   children: React.ReactNode;
  number: number;
  active?: boolean;
}

export default function PaginationButton({
  number,
  active = false,
}: PaginationButtonProps) {
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
}
