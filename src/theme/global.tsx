import { PaletteMode } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
import { useDeviceQuery } from "../util/breakpoints";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
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
            topicsBackground: { main: "#F5F7FB" },
            tableBackground: {
              main: "#f5f7fb52",
              firstCell: "#529EED",
              firstCellRightBorder: "#3a76b4",
            },
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
            topicsBackground: { main: "#282828" },
            tableBackground: {
              main: "#12121299",
              firstCell: "#133a61",
              firstCellRightBorder: "#0c2743",
            },
            backdrop: { main: "#1e1e1e" },
          }),
    },
    components: {
      // Name of the component
      MuiCssBaseline: {
        styleOverrides: () => `
          *::-webkit-scrollbar {
            width: 0.6rem;
          }
          *::-webkit-scrollbar-track: {
            border-radius: 2rem;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00);
            
          }
          *::-webkit-scrollbar-thumb {
            border-radius: 2rem;
            // backgroundColor: rgba(0,0,0,.1);
            // outline: 1px solid slategrey;
            background-color: ${mode === "dark" ? "#12121299" : "#234364"}
          }
        `,
      },
    },
  };
};

const useGlobalTheme = () => {
  const { prefersDarkMode } = useDeviceQuery();
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "dark")),
    [prefersDarkMode]
  );

  return [theme];
};

export default useGlobalTheme;
