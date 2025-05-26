"use client";

import React from "react";
import { Playfair } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
// SWIPPER
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const playFair = Playfair({
  subsets: ["latin"],
});

interface SliderContentProps {
  horizontal: boolean;
  title: string;
  subTitle: string;
  link: string;
  image: string;
}

export default function SwCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const carouselItems: SliderContentProps[] = [
    {
      horizontal: false,
      title: "Simple Lines",
      subTitle: "Mariana Diamond",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1529432337323-223e988a90fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxsaW5lc3xlbnwxfHx8fDE2ODU5NzIyMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      horizontal: false,
      title: "Simple Lines",
      subTitle: "Mariana Diamond",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1529432337323-223e988a90fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxsaW5lc3xlbnwxfHx8fDE2ODU5NzIyMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      horizontal: false,
      title: "Simple Lines",
      subTitle: "Mariana Diamond",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1646900614911-378fd0c1d86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw4M3x8b3JhbmdlJTIwYW5kJTIwYmxhY2t8ZW58MXx8fHwxNjg1OTcyNjI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      horizontal: true,
      title: "hooooo",
      subTitle: "Mariana Diamond",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxzdW1tZXIlMjBvcmFuZ2V8ZW58MXx8fHwxNjg1OTcyNzg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];
  return (
    // <Slider {...settings}>
    <Swiper
      slidesPerView={3}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay, Pagination]}
      pagination={pagination}
      loop={true}>
      {carouselItems.map((item, number) => (
        <SwiperSlide key={number} delay={1000}>
          <div className="px-3 my-10">
            <div className={clsx("bg-white px-6 py-8 h-[200px] lg:h-[350px] flex", item.horizontal ? "flex-col  gap-6" : " flex-row-reverse gap-12 ")}>
              {/* <div className={clsx("bg-[url(https://picsum.photos/500/200)]", "bg-cover bg-center ", item.horizontal ? "flex-1" : "flex-1")}></div> */}
              <div className={clsx("relative w-full h-full", item.horizontal ? "flex-1" : "flex-1")}>
                <Image
                  loading="lazy"
                  alt="ddd"
                  style={{objectFit : "cover"}}
                  fill={true}
                  src={item.image}
                />
              </div>
              <div className={clsx("", item.horizontal ? "text-center" : "flex items-center flex-1")}>
                <div className={item.horizontal ? "" : "space-y-5"}>
                  <div className={clsx(playFair.className, "text-3xl")}>{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.subTitle}</div>
                  {!item.horizontal && (
                    <div className="my-3">
                      <span className=" px-4 py-3 font-semibold  text-primary border bborder-primary">Lear more</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // </Slider>
  );
}
