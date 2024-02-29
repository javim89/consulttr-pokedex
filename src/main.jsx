import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '@fontsource/dm-mono';
// import createPalette from 'material-ui/styles/palette';
// import createTypography from 'material-ui/styles/typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'DM Mono',
      'monospace',
    ].join(','),
  },
  palette: {
    error: {
      dark: "#FF4F4F"
    }
  }
});

// const theme = createMuiTheme({
//   typography: createTypography(createPalette(), {
//     fontFamily: '"DM Mono"',
//   })
// });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
