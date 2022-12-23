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
  selected: boolean;
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  label,
  index,
  selected,
}) => (
  <ListItem key={`${label}-${index}`} disablePadding>
    <ListItemButton
      sx={{
        backgroundColor: selected ? "backdrop.main" : "none",
        borderRadius: "1rem",
        margin: "1rem 0 1rem 0",
      }}
    >
      <ListItemIcon sx={{ color: "primary.dark" }}>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  </ListItem>
);
export default MenuItem;
