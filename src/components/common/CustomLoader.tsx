import { Box, CircularProgress, Typography } from "@mui/material";

const CustomLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
    >
      <CircularProgress color="primary" size={50} thickness={4} />
      <Typography
        variant="body2"
        color="text.secondary"
        mt={2}
        sx={{ letterSpacing: 1.2 }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default CustomLoader;
