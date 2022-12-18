import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { amber, deepOrange, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => {
  console.log({ mode });
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: { main: "#007FFF" },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: { main: "#007FFF" },
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: "#e2e2e2",
              secondary: "#1E1E1E",
            },
          }),
    },
  };
};

const useGlobalTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  console.log({ prefersDarkMode });

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );

  console.log({ theme });
  return [theme];
};

export default useGlobalTheme;
