import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import * as React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const drawerWidth = 240;

function Dashboard(props) {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline></CssBaseline>

        <Header
          open={open}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        ></Header>

        <Sidebar
          open={open}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        ></Sidebar>

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
            <Footer></Footer>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default connect()(Dashboard);
