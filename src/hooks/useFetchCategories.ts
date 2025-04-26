import { useEffect, useState } from "react";
import { fetchCategories } from "../api/fetchCategories";

export const useFetchCategories = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchCategories()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { data, isLoading, isError };
};
