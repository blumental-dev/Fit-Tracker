import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
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
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "primary.dark" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  </>
);

export default Menu;
