import React from "react";
import RecommandationCard from "./RecommandationCard";
import { BookProps } from "@/app/data/typeDatas";
import clsx from "clsx";
import { Playfair } from "next/font/google";

const playFair = Playfair({
  subsets: ["latin"],
});
interface LogoType {
  size: "sm" | "lg";
  children?: React.ReactNode;
}

export default function Recommandation() {
  const recommandations: BookProps[] = [
    {
      image:
        "https://images.unsplash.com/photo-1628677159652-6844e4f1a0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0NXx8c2hhZG93c3xlbnwxfHx8fDE2ODU5NzU1NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Alchemist’s Key",
      author: "Michael Andreson",
      price: "12",
      new: true,
      reduction: -3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1617431014649-87bc7aa77c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyN3x8a2V5fGVufDF8fHx8MTY4NTk3NTU5OXww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Art of Letting Go",
      author: "Emily Collins",
      price: "12",
      reduction: -3,

      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1531592937781-344ad608fabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxnb29kYnllfGVufDF8fHx8MTY4NTk3NTYxNHww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Forgotten Forrest",
      author: "Robert Lawson",
      price: "12",
      new: false,
      reduction: -3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1635084350500-c19300a9eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHx0ZWxnYXJ0fGVufDF8fHx8MTY4NTk3NjIyMXww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "The Memory Collector",
      author: "James Parker",
      price: "12",
      new: false,
      reduction: -5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHx0b3VyaXN0fGVufDF8fHx8MTY4NTk3NjMzMnww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "Scary Castle on the Hill",
      author: "John Palfy",
      reduction: -3,
      price: "12",
      new: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1581926760858-f3009f4bf1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxib2puaWNlfGVufDF8fHx8MTY4NTk3NTY5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      title: "Scary Castle on the Hill",
      reduction: -3,
      author: "John Palfy",
      price: "12",
      new: true,
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto ">
      <div className={clsx(playFair.className, "py-10 text-center text-4xl font-semibold")}>Nos recommandations</div>
      <div className="grid grid-cols-6 gap-4">
        {recommandations.map((item, index) => {
          return <RecommandationCard key={index} data={item} type="lg" />;
        })}
      </div>
    </div>
  );
}
