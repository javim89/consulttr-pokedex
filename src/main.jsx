import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/dm-mono";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: "30px 32px",
          background: "linear-gradient(#6B46BF,#111C37)",
          height: "100%",
        },
      },
    },
  },
  typography: {
    fontFamily: ["DM Mono", "monospace"].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    error: {
      light: "#FF4F4F",
      main: "#FF4F4F",
      dark: "#FF4F4F",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
