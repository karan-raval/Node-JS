import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme();

createRoot(document.getElementById("root")).render(
  // <ThemeProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ThemeProvider>
);
