import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Thank you for your order!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Your order has been successfully placed. We will contact you soon.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
};

export default ThankYouPage;
