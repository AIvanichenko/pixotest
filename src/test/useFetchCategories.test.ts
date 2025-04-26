import { renderHook, waitFor } from "@testing-library/react";
import { useFetchCategories } from "../hooks/useFetchCategories";
import * as api from "../api/fetchCategories";

vi.mock("../api/fetchCategories");

describe("useFetchCategories", () => {
  it("fetches category list", async () => {
    const mockCategories = ["electronics", "jewelery"];

    vi.spyOn(api, "fetchCategories").mockResolvedValue(mockCategories);

    const { result } = renderHook(() => useFetchCategories());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockCategories);
    expect(result.current.isError).toBe(false);
  });
});
