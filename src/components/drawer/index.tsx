import LogoutIcon from "@mui/icons-material/Logout";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import React, { useEffect, useRef, useState } from "react";
import { useDrawer } from "../../context/drawerContext";
import { useDeviceQuery } from "../../util/breakpoints";
import Avatar from "../avatar";
import Logo from "../logo";
import Menu from "../menu";

const getDrawerWidth = (isMobile: boolean, parentElementWidth: number) =>
  isMobile ? parentElementWidth / 6 : parentElementWidth / 5.5;

const CustomDrawer: React.FunctionComponent<any> = () => {
  const { state, dispatch } = useDrawer();
  const { isMobile } = useDeviceQuery();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerWidth, setDrawerWidth] = useState<number>();
  const [drawerHeight, setDrawerHeight] = useState<number>();

  useEffect(() => {
    if (drawerRef.current) {
      setDrawerWidth(
        getDrawerWidth(
          isMobile,
          (drawerRef.current.offsetParent as HTMLDivElement).offsetWidth
        )
      );
      setDrawerHeight(drawerRef.current.offsetHeight);
    }
  }, [drawerRef, isMobile]);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      isOpen ? dispatch({ type: "open" }) : dispatch({ type: "close" });
    };

  const handleDrawerClick = (event: React.BaseSyntheticEvent) => {
    if (event.target.classList.contains("MuiDrawer-root")) {
      dispatch({ type: "close" });
    }
    return;
  };

  return (
    <>
      <Drawer
        ref={drawerRef}
        anchor="left"
        open={state.isOpen}
        sx={
          isMobile
            ? {}
            : {
                zIndex: 10,
                width: drawerWidth,
                flexShrink: 0,
              }
        }
        variant={isMobile ? "temporary" : "permanent"}
        PaperProps={{
          sx: {
            height: drawerHeight,
            alignItems: "center",
            position: { sm: "fixed", md: "relative", lg: "relative" },
            display: { sm: "auto", md: "flex", lg: "flex" },
            zIndex: "inherit",
            backgroundColor: "drawerBackground.main",
            border: "none",
            borderTopLeftRadius: { sm: "unset", md: "unset", lg: "2rem" },
            borderBottomLeftRadius: { sm: "unset", md: "unset", lg: "2rem" },
            top: "unset",
            left: "unset",
          },
        }}
        onClick={(event) => handleDrawerClick(event)}
        onClose={toggleDrawer(false)}
        hideBackdrop
      >
        <Logo isMobile={isMobile} />
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Avatar fullName="Asaf Blumental" title="Admin" />
          <Menu drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
          <Button variant="outlined" startIcon={<LogoutIcon />}>
            exit
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
