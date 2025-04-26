import { renderHook, waitFor } from "@testing-library/react";
import { useFetchProduct } from "../hooks/useFetchProduct";
import * as api from "../api/fetchProduct";

vi.mock("../api/fetchProduct");

describe("useFetchProduct", () => {
  it("fetches single product by ID", async () => {
    const mockData = {
      id: 1,
      title: "Test",
      price: 99,
      description: "desc",
      category: "cat",
      image: "img",
      rating: { rate: 5, count: 50 },
    };

    vi.spyOn(api, "fetchProduct").mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetchProduct(1));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isError).toBe(false);
  });
});
