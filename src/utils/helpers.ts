import { ShortTitleProps } from "./types";

export const getRandomImage = () => {
  return "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png";
};

export const shortTitle = ({ title, limit }: ShortTitleProps) => {
  return title.length > limit ? `${title.slice(0, limit)}...` : title;
};
