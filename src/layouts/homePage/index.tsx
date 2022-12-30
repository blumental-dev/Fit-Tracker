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
        <Box
          sx={{
            bgcolor: "topicsBackground.main",
            borderRadius: { sm: "none", md: "2rem", lg: "2rem", xl: "2rem" },
            padding: {
              xs: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "2rem",
              xl: "2rem",
            },
            height: "100%",
            margin: { sm: "0 auto", md: "none", lg: "none" },
            display: { sm: "flex", md: "grid", lg: "grid" },
            flexDirection: { sm: "column", md: "none", lg: "none" },
            alignItems: { sm: "stretch", md: "none", lg: "none" },
            gridTemplateColumns: {
              sm: "none",
              md: "repeat(8, 1fr)",
              lg: "repeat(8, 1fr)",
              xl: "repeat(8, 1fr)",
            },
            gridTemplateRows: {
              sm: "none",
              md: "repeat(8, 1fr)",
              lg: "repeat(8, 1fr)",
              xl: "repeat(8, 1fr)",
            },
            gap: { sm: "none", md: "none", lg: "1rem" },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
