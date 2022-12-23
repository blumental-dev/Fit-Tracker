import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import type {} from "@mui/material/themeCssVarsAugmentation";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDrawer } from "../../context/drawerContext";
import { useDeviceQuery } from "../../util/breakpoints";
import "./index.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { dispatch } = useDrawer();
  const { isMobile } = useDeviceQuery();
  let headerElementSize = isMobile ? "1.5rem" : "2rem";

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        display: { xs: "flex", md: "none", alignItems: "center" },
        backgroundColor: "headerBackground.main",
        backgroundImage: "none",
        color: "primary.dark",
        boxShadow: "none",
        backdropFilter: "blur(8px)",
        borderStyle: "solid",
        borderColor: "divider",
        borderWidth: "0",
        borderBottomWidth: "thin",
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => dispatch({ type: "toggle" })}
              sx={{ color: "primary.dark" }}
            >
              <MenuIcon
                sx={{ width: headerElementSize, height: headerElementSize }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", alignItems: "center" },
              marginLeft: "1rem",
            }}
          >
            <FitnessCenterIcon
              sx={{
                borderRadius: "50%",
                width: headerElementSize,
                height: headerElementSize,
                color: "primary.dark",
                padding: ".2rem",
                display: { xs: "flex", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontSize: headerElementSize,
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ color: "inherit", flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircleIcon
                  sx={{
                    color: "primary.dark",
                    width: headerElementSize,
                    height: headerElementSize,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
