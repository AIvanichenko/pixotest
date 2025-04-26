import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { Product } from "../types/Product";

export const useFetchProducts = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, isError };
};
