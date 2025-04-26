import { useState, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useFetchCategories } from "../hooks/useFetchCategories";

import ErrorBlock from "../components/common/ErrorBlock";
import FiltersSidebar from "../components/Home/FiltersSidebar";
import TopControls from "../components/Home/TopControls";
import ProductGrid from "../components/Home/ProductGrid";
import CustomLoader from "../components/common/CustomLoader";

const HomePage = () => {
  const { data: products, isLoading, isError } = useFetchProducts();
  const { data: categories } = useFetchCategories();

  const [filtersOpen, setFiltersOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const open = Boolean(anchorEl);

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleSort = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const resetFilters = () => {
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setSortOption(null);
  };
  const min = Number(minPrice) || 0;
  const max = Number(maxPrice) || Infinity;

  const filteredSortedProducts = useMemo(() => {
    if (!products) return [];

    return products
      .filter(
        (p) =>
          selectedCategories.length === 0 ||
          selectedCategories.includes(p.category)
      )
      .filter((p) => p.price >= min && p.price <= max)
      .sort((a, b) => {
        if (sortOption === "priceAsc") return a.price - b.price;
        if (sortOption === "priceDesc") return b.price - a.price;
        if (sortOption === "titleAsc") return a.title.localeCompare(b.title);
        if (sortOption === "titleDesc") return b.title.localeCompare(a.title);
        if (sortOption === "ratingAsc") return a.rating.rate - b.rating.rate;
        if (sortOption === "ratingDesc") return b.rating.rate - a.rating.rate;
        return 0;
      });
  }, [products, selectedCategories, min, max, sortOption]);
  const hasFilters =
    selectedCategories.length > 0 || minPrice !== "" || maxPrice !== "";

  if (isLoading) return <CustomLoader />;
  if (isError) return <ErrorBlock />;

  return (
    <Container sx={{ mt: 4 }}>
      <TopControls
        filtersOpen={filtersOpen}
        toggleFilters={() => setFiltersOpen(!filtersOpen)}
        view={view}
        setView={setView}
        sortOption={sortOption}
        anchorEl={anchorEl}
        open={open}
        handleSortClick={handleSortClick}
        handleSort={handleSort}
        closeMenu={() => setAnchorEl(null)}
      />

      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        {filtersOpen && (
          <Grid size={{ xs: 4, md: 3 }}>
            <FiltersSidebar
              categories={categories}
              resetFilters={resetFilters}
              hasFilters={hasFilters}
              selectedCategories={selectedCategories}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onCategoryChange={handleCategoryChange}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </Grid>
        )}
        <Grid size={{ xs: 4, md: filtersOpen ? 9 : 12 }}>
          <ProductGrid products={filteredSortedProducts} view={view} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
