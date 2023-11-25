import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const MenuList = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <DashboardIcon color="secondary"></DashboardIcon>
        </ListItemIcon>
        <ListItemText primary="Homepage"></ListItemText>
      </ListItemButton>
    </React.Fragment>
  );
};
