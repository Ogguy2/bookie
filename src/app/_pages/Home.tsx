import React from "react";
import Header from "@/components/Header";
import SwCarousel from "@/components/SwCarousel";
import Recommandation from "@/components/Recommandation";
import Image from "next/image";
import HomeSectionBook from "@/components/HomeSectionBook";
import Footer from "@/components/Footer";
// import { bestSellers, litleReaders, selfDevelopment } from "./data/datas";
import Posts from "@/components/Posts";
import DefaultPageLayout from "@/components/layout/DefaultPageLayout";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import { bestSellers, litleReaders, selfDevelopment } from "../data/datas";

function RightSectionCard(props) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl h-full align-middle ">{props.index + 1}</div>
      <div className="flex-1 grid grid-cols-3 items-center gap-4 h-full">
        <div className="w-full h-full relative">
          <ImageCard className="" size="auto" image={props.data.image} />
        </div>
        <div className="space-y-4 col-span-2">
          <div className="space-y-1 w-full">
            {/* TITLE */}
            <div className="font-semibold">{props.data.title}</div>
            <div className="font-light">{props.data.author}</div>
          </div>
          <div className="w-full">
            <div className="text-primary text-3xl font-bold">
              ${props.data.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <DefaultPageLayout>
      {/* Carousel */}
      <div className="bg-black">
        <div className=" max-w-[1500px] mx-auto">
          <SwCarousel />
        </div>
      </div>
      {/* Récommendations */}
      <Recommandation />
      {/* Sections */}
      <div className="max-w-[1500px] mx-auto py-20">
        <div className="grid grid-cols-6 grid-flow-col grid-rows-2 gap-4">
          <div className="col-span-4 row-span-2  gap-4  grid grid-rows-2">
            <div className="bg-white py-6">
              <HomeSectionBook
                data={litleReaders.data}
                link="/book-genre/little-readers"
                title="For little readers"
              ></HomeSectionBook>
            </div>
            <div className="bg-white py-6">
              <HomeSectionBook
                data={selfDevelopment.data}
                link="/book-genre/res"
                title="Self-development"
              ></HomeSectionBook>
            </div>
          </div>
          <div className=" h-full row-span-2 px-6 bg-white py-6 col-span-2">
            <div className="flex h-full space-y-6 flex-col">
              <div className="flex w-full items-center justify-between">
                <div className="text-3xl font-semibold font-playfair">
                  {bestSellers.title}
                </div>
                <div className="text-sm font-light hover:underline">
                  <Link href={bestSellers.link}>view more</Link>
                </div>
              </div>
              <div className={"grid grid-cols-1 flex-1 space-y-4  h-full"}>
                {bestSellers.data.map((data, index) => {
                  return (
                    <RightSectionCard key={index} data={data} index={index} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* POST */}
      <Posts />
      {/* FOOTER */}
    </DefaultPageLayout>
  );
}
