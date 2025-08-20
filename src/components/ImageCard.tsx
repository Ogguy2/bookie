"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

interface ImageCardProps {
  size: "sm" | "md" | "lg" | "auto";
  image: string;
  className: string;
}
const ImageCard = ({ className, size = "sm", image }: ImageCardProps) => {
  // const [imageLink, setImageLink] = useState(null);

  // useEffect(() => {
  //   console.log("dd");
  //   setImageLink("https://picsum.photos/200/300");
  // }, [image]);

  const sizeStyle = {
    sm: "w-full h-[300px]",
    md: "w-full h-[350px]",
    lg: "w-full h-[400px]",
    auto :"w-full h-full",
  };

  return (
    <div className={clsx(sizeStyle[size], className, "relative w-full")}>
      <Image loading="lazy" style={{ objectFit: "cover" }} alt="ddd" fill src={image} />
    </div>
  );
};

export default ImageCard;
