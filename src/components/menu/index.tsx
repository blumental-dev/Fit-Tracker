import { Divider, List } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
import MenuItem from "./menuItem";
type MenuProps = {
  drawerWidth: number | undefined;
  toggleDrawer: (val: boolean) => void;
};
const Menu: React.FunctionComponent<MenuProps> = ({
  drawerWidth,
  toggleDrawer,
}) => (
  <>
    <Box
      sx={{
        width: drawerWidth,
        padding: { sm: "unset", md: "2rem", lg: "2rem" },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {["Workout Planner", "Weight Tracker", "Objectives"].map(
          (label, index) => (
            <MenuItem label={label} index={index} />
          )
        )}
      </List>
      <Divider />
    </Box>
  </>
);

export default Menu;
