import { ShortTitleProps } from "./types";

export const getRandomImage = () => {
  return "https://source.unsplash.com/1600x900/?booklovers";
};

export const shortTitle = ({ title, limit }: ShortTitleProps) => {
  return title.length > limit ? `${title.slice(0, limit)}...` : title;
};
