import React from "react";
import Header from "@/components/Header";
import SwCarousel from "@/components/SwCarousel";
import Recommandation from "@/components/Recommandation";
import Image from "next/image";
import HomeSectionBook from "@/components/HomeSectionBook";
import Footer from "@/components/Footer";
import { bestSellers, litleReaders, selfDevelopment } from "./data/datas";
import Posts from "@/components/Posts";

export default function page() {
  return (
    <div className="bg-[#f5f5f2]">
      {/* HEADER */}
      <Header />
      {/* CAROUSEL */}
      <div className="bg-black">
        <div className=" max-w-[1500px] mx-auto">
          <SwCarousel />
        </div>
      </div>
      {/* RECOMMANDATIONS */}
      <Recommandation />
      {/* SECTION */}
      <div className="max-w-[1500px] mx-auto py-20">
        <div className="grid grid-cols-6 grid-flow-col grid-rows-2 gap-4">
          <div className="col-span-4 row-span-2  gap-4  grid grid-rows-2">
            <div className="bg-white py-6">
              <HomeSectionBook data={litleReaders} link="/" title="For little readers"></HomeSectionBook>
            </div>
            <div className="bg-white py-6">
              <HomeSectionBook data={selfDevelopment} link="/" title="Self-development"></HomeSectionBook>
            </div>
          </div>
          <div className=" h-full row-span-2 px-6  py-6 col-span-2">
            <div className="flex h-full space-y-6 flex-col">
              <div className="flex w-full items-center justify-between">
                <div className="text-3xl font-semibold">Bestsellers</div>
                <div className="text-sm font-light">View more</div>
              </div>
              <div className={"grid grid-cols-1 flex-1 space-y-4  h-full"}>
                {bestSellers.map((data, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-3xl h-full align-middle ">1</div>
                      <div className="flex-1 grid grid-cols-3 items-center gap-4 h-full">
                        <div className="w-full h-full relative">
                          {/* <div className="bg-[url(https://picsum.photos/500/200)] w-full h-full bg-cover bg-center"></div> */}
                          <Image loading="lazy" alt="ddd" style={{ objectFit: "cover" }} fill src={data.image} />
                        </div>
                        <div className="space-y-4 col-span-2">
                          <div className="space-y-1 w-full">
                            {/* TITLE */}
                            <div className="font-semibold">{data.title}</div>
                            <div className="font-light">{data.author}</div>
                          </div>
                          <div className="w-full">
                            <div className="text-primary text-3xl font-bold">${data.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      <Footer />
    </div>
  );
}
