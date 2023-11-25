import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import { ViewInAr } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MenuList } from "./MenuList";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import { ColorModeContext } from "../../App";
import { blueGrey } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { logout } from "../../actions/global/user.action";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{
        pt: 4,
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function Dashboard(props) {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline></CssBaseline>

        <AppBar position="absolute" open={open}>
          <Toolbar sx={{ pr: "24px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
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

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MenuList></MenuList>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar></Toolbar>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet></Outlet>
            <Copyright></Copyright>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default connect()(Dashboard);
