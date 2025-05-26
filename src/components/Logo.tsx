import React from "react";
import clsx from "clsx";
import { Playfair } from "next/font/google";

const playFair = Playfair({
  subsets : ["latin"]
});
interface LogoType {
  size: "sm" | "lg";
  children?: React.ReactNode;
}

export default function Logo({ size }: LogoType) {
  const sizeLogoClass = {
    sm: "text-4xl font-semibold",
    lg: "text-8xl",
  };
  return (
    <div className={clsx(playFair.className)}>
      <span className={sizeLogoClass[size]}>Bookie</span>
    </div>
  );
}
