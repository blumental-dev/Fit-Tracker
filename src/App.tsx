import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import HomePage from "./layouts/homePage";
import useGlobalTheme from "./theme/global";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  const [theme] = useGlobalTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <HomePage />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
