import React from "react";
interface LogoType {
  size: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export default function Icon({ size, className, children }: LogoType) {
  const siezIcon = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-4xl",
  };
  return <span className={siezIcon[size] + " inline-block " + className}>{children}</span>;
}
