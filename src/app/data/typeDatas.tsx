export interface BookProps {
  // author_name?: string[];
  // cover_i: string;
  author: string;
  image: string;
  title: string;
  price: string;
  new: boolean;
  reduction: number;
  resume? : string;
}

export const BookNull: BookProps = {
  author_name: [],
  cover_i: "",
  author: "",
  image: "",
  title: "",
  price: "",
  new: false,
  reduction: 0,
};
