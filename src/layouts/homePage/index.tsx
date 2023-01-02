import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../../components/drawer";
import Header from "../../containers/header";
import "./index.css";

const HomePage: React.FunctionComponent<any> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: {
          sm: "none",
          md: "2rem 2rem 2rem 2rem",
          lg: "2rem 2rem 2rem 2rem",
          xl: "2rem 2rem 2rem 2rem",
        },
        minHeight: {
          xs: "100vh",
          sm: "100vh",
          md: "90vh",
          lg: "90vh",
          xl: "90vh",
        },
        minWidth: "90vh",
      }}
    >
      <Drawer />
      <Header />
      <Box
        id="detail"
        sx={{
          width: {
            xs: "100vw",
            sm: "100vw",
            lg: "-webkit-fill-available",
            xl: "-webkit-fill-available",
          },
          marginTop: { xs: "5vh", sm: "5vh", lg: "unset", xl: "unset" },
          zIndex: { sm: "20", md: "20", lg: "20", lx: "20" },
          bgcolor: "drawerBackground.main",
          borderTopRightRadius: { sm: "none", md: "2rem", lg: "2rem" },
          borderBottomRightRadius: { sm: "none", md: "2rem", lg: "2rem" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomePage;
