import React from "react";
import clsx from "clsx";
import { Playfair } from "next/font/google";
import Link from "next/link";

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
    <>
    <Link href={"/"} className={clsx(playFair.className)}>
      <span className={sizeLogoClass[size]}>Bookie</span>
    </Link>
    </>
  );
}
