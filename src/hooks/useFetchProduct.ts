import { useEffect, useState } from "react";
import { fetchProduct } from "../api/fetchProduct";
import { Product } from "../types/Product";

export const useFetchProduct = (id: number) => {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchProduct(id)
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, isLoading, isError };
};
