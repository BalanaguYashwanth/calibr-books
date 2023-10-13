import axios from "axios";
import { BACKEND_API } from "./constants";
import { FetchAllBooksProps } from "./types";

export const fetchAllBooks = ({ skip, limit }: FetchAllBooksProps) => {
  return axios.get(`${BACKEND_API}/api/books`, {
    params: {
      skip,
      limit,
    },
  });
};

export const searchBooks = (contents: string) => {
  return axios.post(`${BACKEND_API}/api/books/search`, { contents });
};
