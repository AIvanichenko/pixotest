import axios from "axios";
import { Product } from "../types/Product";

export const fetchProduct = async (id: number): Promise<Product> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
