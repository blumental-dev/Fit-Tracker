import { Divider, List } from "@mui/material";
import Box from "@mui/material/Box";

import React, { useState } from "react";
import MenuItem from "./menuItem";
type MenuProps = {
  drawerWidth: number | undefined;
  toggleDrawer: (val: boolean) => void;
};
type MenuListProps = {
  id: number;
  label: string;
  path: string;
  selected: boolean;
};
const Menu: React.FunctionComponent<MenuProps> = ({
  drawerWidth,
  toggleDrawer,
}) => {
  const [menuList, setMenuList] = useState<MenuListProps[]>([
    { id: 1, label: "Dashboard", path: "/", selected: true },
    { id: 2, label: "Weight Tracker", path: "/weight", selected: false },
    { id: 3, label: "Objectives", path: "/weight", selected: false },
    { id: 4, label: "Settings", path: "/weight", selected: false },
  ]);

  const changeSelectedMenuItem = (index: number) =>
    setMenuList((prevState) => {
      for (const obj of prevState) {
        if (obj.id === index) {
          if (!obj.selected) {
            obj.selected = true;
          }
        } else {
          obj.selected = false;
        }
      }
      return prevState;
    });

  return (
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
        {menuList.map((item, index) => (
          <MenuItem
            key={`${item.label}-${index}`}
            index={item.id}
            {...item}
            onSelect={changeSelectedMenuItem}
          />
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default Menu;
