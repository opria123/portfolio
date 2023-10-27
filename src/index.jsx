import "./style.css";
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from "react-dom/client";
import App from "./app"
import { ContextProvider } from "./app-context/context-provider";
import { BrowserRouter } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </BrowserRouter>
);
