import axios from "axios";

export const fetchCategories = async (): Promise<string[]> => {
  const { data } = await axios.get<string[]>(
    "https://fakestoreapi.com/products/categories"
  );
  return data;
};
