import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  Tooltip,
} from "@mui/material";
import { Product } from "../../types/Product";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

export const ProductCard = ({ product, view = "grid" }: ProductCardProps) => {
  const { addToCart, toggleSelect } = useCart();
  const navigate = useNavigate();
  const isList = view === "list";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
    toggleSelect(product.id);
    navigate("/cart");
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        transition: "0.2s",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <Box
        component={Link}
        to={`/product/${product.id}`}
        sx={{
          display: "flex",
          flexDirection: isList ? "row" : "column",
          textDecoration: "none",
          color: "inherit",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isList ? "180px" : "100%",
            flexShrink: 0,
            bgcolor: "#fafafa",
            borderRadius: 1,
            p: 1,
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              height: 180,
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Tooltip title={product.title}>
            <Typography
              variant="body2"
              noWrap={!isList}
              sx={{ fontWeight: 700, fontSize: 16 }}
              gutterBottom
            >
              {product.title}
            </Typography>
          </Tooltip>

          {isList && (
            <Tooltip title={product.description}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {product.description.slice(0, 300)}...
              </Typography>
            </Tooltip>
          )}

          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <Rating
              value={product.rating.rate}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              ({product.rating.count})
            </Typography>
          </Box>

          <Typography variant="h6" color="primary" mt={1}>
            ${product.price}
          </Typography>
        </CardContent>
      </Box>

      <Box p={2} pt={0} sx={{ mt: isList ? "16px" : "auto" }}>
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={handleAddToCart}
        >
          + Add to cart
        </Button>
      </Box>
    </Card>
  );
};
