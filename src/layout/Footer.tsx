import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      height: 64,
      minHeight: 64,
      maxHeight: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderTop: "1px solid",
      borderColor: "divider",
      px: 2,
      mt: "auto",
    }}
  >
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Ivanichenko Andrii PixoTest
    </Typography>
  </Box>
);

export default Footer;
