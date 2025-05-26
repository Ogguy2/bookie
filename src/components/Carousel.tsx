"use client";

import React from "react";
import Slider from "react-slick";
import { Playfair } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import Image from "next/image";

const playFair = Playfair({
  subsets: ["latin"],
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none", background: "red" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none", background: "green" }} onClick={onClick} />;
}
interface SliderContentProps {
  horizontal: boolean;
  title: string;
  subTitle: string;
  link: string;
  image: string;
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: null,
    prevArrow: null,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div style={{}}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}>
        {i + 1}
      </div>
    ),
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
    <Slider {...settings}>
      {carouselItems.map((item, number) => (
        <div key={number} className="px-3">
          <div className={clsx("bg-white px-6 py-8 h-[200px] lg:h-[350px] flex", item.horizontal ? "flex-col  gap-6" : " flex-row-reverse gap-12 ")}>
            {/* <div className={clsx("bg-[url(https://picsum.photos/500/200)]", "bg-cover bg-center ", item.horizontal ? "flex-1" : "flex-1")}></div> */}
            <div className={clsx("relative", item.horizontal ? "flex-1" : "flex-1")}>
              <Image alt="ddd" fill={true} className={clsx("bg-[url(https://picsum.photos/500/200)]", "bg-cover bg-center ")} src={item.image} />
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
      ))}
    </Slider>
  );
}
