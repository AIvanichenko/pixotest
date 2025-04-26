import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    primary: {
      main: "#4f46e5",
    },
    secondary: {
      main: "#10b981",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },
    divider: "#e5e7eb",
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    primary: {
      main: "#818cf8",
    },
    secondary: {
      main: "#34d399",
    },
    text: {
      primary: "#f9fafb",
      secondary: "#cbd5e1",
    },
    divider: "#334155",
  },
});
 