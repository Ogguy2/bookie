import clsx from "clsx";
import React from "react";

interface ButtonProps {
  contentClass: string;
  textClass?: string;
  children: React.ReactNode;
}
export default function Button({
  children,
  textClass,
  contentClass,
}: ButtonProps) {
  return (
    <button className={clsx("border text-[#807f7a]", textClass, contentClass)}>
      {children}
    </button>
  );
}
