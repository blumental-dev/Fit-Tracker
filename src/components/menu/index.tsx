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
        padding: { sm: "unset", md: "0 2rem 0 2rem", lg: "0 2rem 0 2rem" },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {[
          { label: "Workout Planner", selected: true },
          { label: "Weight Tracker", selected: false },
          { label: "Objectives", selected: false },
          { label: "Settings", selected: false },
        ].map(({ label, selected }, index) => (
          <MenuItem
            key={`${label}-${index}`}
            label={label}
            index={index}
            selected={selected}
          />
        ))}
      </List>
      <Divider />
    </Box>
  </>
);

export default Menu;
