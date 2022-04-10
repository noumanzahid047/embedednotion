import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";


const themeX = createTheme({
  palette : {
    background : {
      paper: '#29b6f6',
      default: '#3B82F6',
  }
  }});
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={themeX}>
      <CssBaseline/>
        <App />
    </ThemeProvider>
  </StrictMode>
);
