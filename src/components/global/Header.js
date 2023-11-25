import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ViewInAr } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import { ColorModeContext } from "../../App";
import { blueGrey } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { logout } from "../../actions/global/user.action";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header(props) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        open={props.open}
        drawerWidth={props.drawerWidth}
      >
        <Toolbar sx={{ pr: "24px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(props.open && { display: "none" }),
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>

          <ViewInAr
            sx={{ display: { sx: "none", md: "flex" }, mr: 1 }}
          ></ViewInAr>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Boilerplate
          </Typography>

          <nav>
            <Link
              variant="button"
              color="inherit"
              underline="hover"
              onClick={() => {
                navigate("/about");
              }}
              sx={{ my: 1, mx: 1.5 }}
              href="#"
            >
              About
            </Link>
          </nav>

          {props.user && (
            <Tooltip title={props.name}>
              <Avatar sx={{ bgcolor: blueGrey[200] }}>
                {props.name.charAt(0).toUpperCase()}
              </Avatar>
            </Tooltip>
          )}

          {props.user ? (
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              color="inherit"
              startIcon={<LogoutIcon></LogoutIcon>}
              onClick={() => props.dispatch(logout())}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              color="inherit"
              startIcon={<LoginIcon></LoginIcon>}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </Button>
          )}

          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon></Brightness7Icon>
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
