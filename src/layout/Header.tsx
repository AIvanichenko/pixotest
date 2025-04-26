import { AppBar, Toolbar, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "../components/common/ThemeToggleButton";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ height: 64, justifyContent: "center" }}>
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
        <IconButton onClick={() => navigate("/")} color="inherit">
          <HomeIcon />
        </IconButton>

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <ThemeToggleButton />
          <IconButton onClick={() => navigate("/cart")} color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
