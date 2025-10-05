import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './theme.js';
import App from './App';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
