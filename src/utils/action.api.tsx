import axios from "axios";
import { BACKEND_API } from "./constants";

export const fetchAllBooks = () => {
  return axios.get(`${BACKEND_API}/api/books`);
};

export const searchBooks = (contents:string) => {
  return axios.post(`${BACKEND_API}/api/books/search`, {contents});
};
