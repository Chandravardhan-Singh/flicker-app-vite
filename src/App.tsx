import React, { useEffect } from "react";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { themeOptions } from "./theme";
function App() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
