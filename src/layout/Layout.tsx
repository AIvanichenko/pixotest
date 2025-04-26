import { Container, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container maxWidth="lg" sx={{ my: 2, flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
