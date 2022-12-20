import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const getDesignTokens = (mode) => {
  console.log({ mode });
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: { main: "#fafafa", dark: "#0575E6" },
            secondary: { main: "#b3e5fc" },
            divider: "#E7EBF0",
            background: {
              default: "#F5F7FB",
              paper: "#ffffff",
            },
            drawerBackground: { main: "#ffffff" },
            text: {
              primary: "#6b6b6b",
              secondary: "#000000",
            },
            headerBackground: { main: "#ffffff" },
          }
        : {
            // palette values for dark mode
            primary: { main: "#007FFF", dark: "#007fffcc" },
            divider: "#007fff40",
            background: {
              default: "#121212",
              paper: "#12121299",
            },
            drawerBackground: { main: "#121212" },
            text: {
              primary: "#F3F6F9",
              secondary: "#9BA3AD",
            },
            headerBackground: { main: "#121212" },
          }),
    },
  };
};

const useGlobalTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );

  return [theme];
};

export default useGlobalTheme;
