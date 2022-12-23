import { Stack } from "@mui/material";
import MuiAvatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

type AvatarProps = {
  fullName: string;
  title: string;
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Avatar: React.FunctionComponent<AvatarProps> = ({ fullName, title }) => (
  <Stack
    direction="column"
    sx={{
      alignItems: "center",
      marginTop: { xs: "5vh", sm: "5vh", md: "15vh", lg: "15vh" },
    }}
    spacing={2}
  >
    <StyledBadge
      overlap="circular"
      sx={{ width: "fit-content" }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <MuiAvatar
        sx={{ height: "3.5rem", width: "3.5rem" }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
    </StyledBadge>
    <Stack direction={"column"} spacing={0}>
      <Typography
        component="span"
        variant="subtitle1"
        color={"text.primary"}
        fontWeight="bold"
      >
        {fullName}
      </Typography>
      <Typography component="span" variant="caption" color={"text.secondary"}>
        {title}
      </Typography>
    </Stack>
  </Stack>
);
export default Avatar;
