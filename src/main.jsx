import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/dm-mono";
import "@fontsource/dm-mono/500.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import PokemonProvider from "./context/PokemonContext";
import theme from "./theme/theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
