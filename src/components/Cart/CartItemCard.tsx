import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Checkbox,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";

interface CartItemCardProps {
  item: Product & { quantity: number };
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { removeFromCart, updateQuantity, selected, toggleSelect } = useCart();
  const isChecked = selected.includes(item.id);

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        p: 2,
        gap: 2,
      }}
    >
      <Stack direction="row" alignItems="flex-start" spacing={1}>
        <Checkbox
          checked={isChecked}
          onChange={() => toggleSelect(item.id)}
          sx={{ mt: 1 }}
        />

        <Box
          component={Link}
          to={`/product/${item.id}`}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: 120 },
            height: { xs: 180, sm: 120 },
            bgcolor: "#fafafa",
            borderRadius: 1,
            p: 1,
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </Box>
      </Stack>

      <CardContent sx={{ flex: 1, ml: { sm: 2 }, p: 0, width: "100%" }}>
        <Typography
          variant="subtitle1"
          fontWeight={500}
          sx={{ fontSize: { xs: 14, sm: 16 } }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
          sx={{ fontSize: { xs: 13, sm: 14 } }}
        >
          ${item.price} × {item.quantity}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          mt={{ xs: 1, sm: 0 }}
        >
          <TextField
            type="number"
            size="small"
            label="Qty"
            value={item.quantity}
            inputProps={{ min: 1 }}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            sx={{ width: 80 }}
          />
          <IconButton color="error" onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
