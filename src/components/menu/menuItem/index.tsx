import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type MenuItemProps = {
  label: string;
  index: number;
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ label, index }) => (
  <ListItem key={`${label}-${index}`} disablePadding>
    <ListItemButton>
      <ListItemIcon sx={{ color: "primary.dark" }}>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  </ListItem>
);
export default MenuItem;
