import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563EB" },      
    background: { default: "#F6F7FB", paper: "#FFFFFF" },
    text: { primary: "#111418", secondary: "#667085" },
    divider: "#E5E7EB",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`,
    h1: { fontSize: 24, fontWeight: 600 },
    h2: { fontSize: 18, fontWeight: 600 },
    body2: { color: "#667085" },
  },
});

export default theme;
