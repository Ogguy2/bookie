import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function BookCategory() {
  const { bookGenre } = useParams();
  const subGenre = [
    {
      title: "Finding hapiness",
    },
    {
      title: "Career",
    },
    {
      title: "Self-confidence",
    },
    { title: "Motivation" },
  ];
  return (
    <>
      <div className="text-4xl font-bold font-playfair">{bookGenre}</div>
      <div className="flex space-x-3">
        {subGenre.map((item, index) => {
          return (
            <Link
              href={"/book-genre/" + bookGenre + "/" + item.title}
              key={index}
              className="rounded-3xl border px-5 py-2  text-[#807f7a] border-[#807f7a] "
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
