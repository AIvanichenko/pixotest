import { TextField, Button, Box } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "./checkoutSchema";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  address: string;
}

interface CheckoutFormProps {
  onSuccess: () => void;
  selectedIds: number[];
}

const CheckoutForm = ({ onSuccess, selectedIds }: CheckoutFormProps) => {
  const { clearSelected, removeFromCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(checkoutSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("ORDER SUBMITTED", data);
    selectedIds.forEach(removeFromCart);
    clearSelected();
    onSuccess();
    navigate("/thank-you");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
      <TextField
        {...register("name")}
        label="Name"
        fullWidth
        margin="dense"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        fullWidth
        margin="dense"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("address")}
        label="Address"
        fullWidth
        margin="dense"
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!isValid}
      >
        Submit Order
      </Button>
    </Box>
  );
};

export default CheckoutForm;
