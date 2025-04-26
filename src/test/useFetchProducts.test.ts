import { renderHook, waitFor } from "@testing-library/react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import * as api from "../api/fetchProducts";

vi.mock("../api/fetchProducts");

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  description: "desc",
  category: "test-category",
  image: "img.png",
  rating: { rate: 4, count: 10 },
};

describe("useFetchProducts", () => {
  it("fetches and returns product data", async () => {
    vi.spyOn(api, "fetchProducts").mockResolvedValue([mockProduct]);

    const { result } = renderHook(() => useFetchProducts());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual([mockProduct]);
    expect(result.current.isError).toBe(false);
  });
});
