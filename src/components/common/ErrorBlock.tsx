import { Container, Typography, Button, Stack, Box } from "@mui/material";
import BackButton from "../common/BackButton";

const ErrorBlock = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Box textAlign="center" maxWidth={500} mx="auto">
        <Typography variant="h4" color="error" gutterBottom>
          Failed to load products
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Please check your internet connection or try again later.
        </Typography>

        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          <BackButton />
          <Button variant="contained" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ErrorBlock;
