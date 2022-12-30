import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import TrackerIcon from "@mui/icons-material/TrackChanges";
import ExerciseIcon from "@mui/icons-material/FitnessCenter";
import { Divider, List } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem";
import { useLocation } from "react-router";
type MenuProps = {
  drawerWidth: number | undefined;
  toggleDrawer: (val: boolean) => void;
};
export type MenuListProps = {
  id: number;
  icon: React.ReactElement;
  label: string;
  path: string;
  selected: boolean;
};
const Menu: React.FunctionComponent<MenuProps> = ({
  drawerWidth,
  toggleDrawer,
}) => {
  const location = useLocation();
  const [menuList, setMenuList] = useState<MenuListProps[]>([
    {
      id: 1,
      icon: <DashboardIcon />,
      label: "My Activity",
      path: "/",
      selected: false,
    },
    {
      id: 2,
      icon: <TrackerIcon />,
      label: "Workout Tracker",
      path: "/weight",
      selected: false,
    },
    {
      id: 3,
      icon: <ExerciseIcon />,
      label: "Exercise Backlog",
      path: "/exercises-backlog",
      selected: false,
    },
    {
      id: 4,
      icon: <SettingsIcon />,
      label: "Settings",
      path: "/settings",
      selected: false,
    },
  ]);

  useEffect(() => {
    const selectedItemIndex = findSelectedItemIndexViaPathName();
    selectedItemIndex && changeSelectedMenuItem(selectedItemIndex);
  }, [location.pathname]);

  const findSelectedItemIndexViaPathName = () => {
    return menuList.find((item) => item.path === location.pathname)?.id;
  };

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
