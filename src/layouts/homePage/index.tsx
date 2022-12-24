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
          sm: "none",
          md: "0 2rem 0 2rem",
          lg: "0 2rem 0 2rem",
          xl: "0 2rem 0 2rem",
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
