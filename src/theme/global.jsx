import { createTheme } from "@mui/material/styles";
import React from "react";
import { useDeviceQuery } from "../util/breakpoints";

const getDesignTokens = (mode) => {
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
              default: "#ffffff",
              paper: "#F5F7FB",
            },
            drawerBackground: { main: "#ffffff" },
            text: {
              primary: "#000000",
              secondary: "#6b6b6b",
            },
            headerBackground: { main: "#ffffff" },
            backdrop: { main: "#ced6e5" },
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
            backdrop: { main: "#1e1e1e" },
          }),
    },
  };
};

const useGlobalTheme = () => {
  const { prefersDarkMode } = useDeviceQuery();

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );

  return [theme];
};

export default useGlobalTheme;
