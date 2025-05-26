import React from "react";
import { Playfair } from "next/font/google";
import clsx from "clsx";

const playFair = Playfair({
  subsets: ["latin"],
});
interface LogoType {
  size: "sm" | "lg";
  children?: React.ReactNode;
}

const Posts = () => {
  return (
    <div className="bg-[#ebebe5]">
      <div className="max-w-[1500px] mx-auto">
        <div className={clsx(playFair.className, "py-10 text-center text-4xl font-semibold")}>Gest inspired</div>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default Posts;
