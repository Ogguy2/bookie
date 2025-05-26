"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
// import Skeleton from "react-loading-skeleton";
// import { Skeleton, Text } from "@radix-ui/themes";

interface ImageCardProps {
  size: "sm" | "md" | "lg";
  image: string;
  className: string;
}
/**
 * Le composant "ImarCard"
 *
 * Read more: [Next.js docs: `Image`](https://nextjs.org/docs/app/api-reference/components/image)
 */
const ImageCard = ({ className, size = "sm", image }: ImageCardProps) => {
  // const [imageLink, setImageLink] = useState(null);

  // useEffect(() => {
  //   console.log("dd");
  //   setImageLink("https://picsum.photos/200/300");
  // }, [image]);

  const sizeStyle = {
    sm: "w-full h-[300px]",
    md: "w-full ",
    lg: "w-full h-[400px]",
  };
  // const loaderFunction = () => {
  //   return "/loadinimage.webp";
  // };
  return (
    <div className={clsx(sizeStyle[size], className, "relative w-full")}>
      {/* <Skeleton>Loading</Skeleton> */}
      {/* {image == null || <Skeleton enableAnimation duration={1} direction="ltr" containerClassName=" h-full flex justify-between" />} */}
      {/* {imageLink ? ( */}
      <Image loading="lazy" style={{ objectFit: "cover" }} alt="ddd" fill src={image} />
      {/* ) : ( */}
      {/* <Text> */}
      {/* <Skeleton> */}
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis tellus, efficitur id convallis a, viverra eget libero. Nam magna erat, */}
      {/* fringilla sed commodo sed, aliquet nec magna. */}
      {/* </Skeleton> */}
      {/* </Text> */}
      {/* )} */}
    </div>
  );
};

export default ImageCard;
