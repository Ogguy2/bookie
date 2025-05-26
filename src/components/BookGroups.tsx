import React from "react";
import BookCard from "./BookCard";
import clsx from "clsx";

interface BookGroups {
  data: [];
  line?: string;
  col?: string;
  vericalAlign: boolean;
}
const BookGroups = ({ data, line, col, vericalAlign }: BookGroups) => {
  return (
    <div className={clsx("grid ", line && "grid-rows-" + line, col && "grid-cols-" + col)}>
      {data.map((item, index) => {
        // return <RecommandationCard key={index} data={item} type="" />;
        return <BookCard key={index} line={line} data={item} vericalAlignn={"dd"} size={""} />;
      })}
    </div>
  );
};

export default BookGroups;
