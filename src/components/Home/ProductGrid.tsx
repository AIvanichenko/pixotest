import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Product } from "../../types/Product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  view: "grid" | "list";
}

const ProductGrid = ({ products, view }: ProductGridProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const forceGrid = isSmallScreen && view === "list";
  const showList = view === "list" && !forceGrid;

  return showList ? (
    <Box display="flex" flexDirection="column" gap={2}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} view="list" />
      ))}
    </Box>
  ) : (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{ xs: 4, sm: 4, md: 4, lg: 3 }}
          display="flex"
        >
          <ProductCard product={product} view="grid" />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
