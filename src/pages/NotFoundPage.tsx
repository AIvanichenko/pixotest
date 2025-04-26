import { Container, Typography } from "@mui/material";
import BackButton from "../components/common/BackButton";

const NotFoundPage = () => {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <BackButton />
    </Container>
  );
};

export default NotFoundPage;
