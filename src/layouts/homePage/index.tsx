import { Box } from "@mui/material";
import React from "react";
import Drawer from "../../components/drawer";
import Header from "../../containers/header";
import Topics from "../../containers/topics";
import "./index.css";
const HomePage: React.FunctionComponent<any> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        margin: {
          xs: "none",
          sm: "none",
          md: "0.5rem",
          lg: "0.5rem",
          xl: "0.5rem",
        },
      }}
    >
      <Drawer />
      <Header />
      <Topics />
    </Box>
  );
};

export default HomePage;
