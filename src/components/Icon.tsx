import React from "react";
interface LogoType {
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function Icon({ size, children }: LogoType) {
  const siezIcon = {
    sm: "",
    md: "text-xl",
    lg: "text-4xl",
  };
  return <span className={siezIcon[size] + " inline-block"}>{children}</span>;
}
