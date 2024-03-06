import { createTheme } from "@mui/material/styles";

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
    primary: {
      light: "#604e9b",
      main: "#652ca8",
      dark: "#3D3179",
      contrastText: "#fff",
    },
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

export default theme;
