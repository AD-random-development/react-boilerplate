import { Link, Typography } from "@mui/material";
import * as React from "react";

function Footer(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Footer;
