import {
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import BackButton from "../components/common/BackButton";
import CartItemCard from "../components/Cart/CartItemCard";

const CartPage = () => {
  const [open, setOpen] = useState(false);
  const { cart, selected } = useCart();

  const selectedItems = cart.filter((item) => selected.includes(item.id));

  const getTotal = () =>
    selectedItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  if (!cart.length) {
    return (
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Your cart is empty
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          Looks like you haven’t added anything to your cart yet.
        </Typography>
        <BackButton label="Start Shopping" />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <BackButton />
      <Stack spacing={2}>
        {cart.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </Stack>

      {!!selectedItems.length && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="h6">
            Total: <b>${getTotal()}</b>
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpen(true)}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <CheckoutForm
            onSuccess={() => setOpen(false)}
            selectedIds={selectedItems.map((item) => item.id)}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CartPage;
