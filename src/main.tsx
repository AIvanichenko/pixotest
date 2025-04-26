import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeContextProvider } from "./context/ThemeContext";



createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    
      <CartProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </CartProvider>
    
  </BrowserRouter>
);
