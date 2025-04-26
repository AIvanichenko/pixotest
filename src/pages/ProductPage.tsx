import { useParams } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchProduct";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Button,
  Box,
  Rating,
} from "@mui/material";
import { Grid } from "@mui/material";
import { useCart } from "../context/CartContext";
import ErrorBlock from "../components/common/ErrorBlock";
import BackButton from "../components/common/BackButton";
import CustomLoader from "../components/common/CustomLoader";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data: product, isLoading, isError } = useFetchProduct(productId);
  const { addToCart, toggleSelect } = useCart();
  const navigate = useNavigate();

  if (isLoading) return <CustomLoader />;
  if (isError || !product) return <ErrorBlock />;
  const handleAddToCart = () => {
    addToCart(product);
    toggleSelect(product.id);
    navigate("/cart");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <BackButton />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 2 }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: "contain", height: 400 }}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} display="flex" flexDirection="column">
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {product.title}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Rating
              value={product.rating.rate}
              precision={0.1}
              readOnly
              size="medium"
            />
            <Typography variant="body2" color="text.secondary">
              ({product.rating.count} reviews)
            </Typography>
          </Box>

          <Typography variant="h5" color="primary" fontWeight={500} mb={2}>
            ${product.price}
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={4}>
            {product.description}
          </Typography>

          <Box mt="auto">
            <Button
              variant="contained"
              size="large"
              onClick={handleAddToCart}
              fullWidth
            >
              + Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
