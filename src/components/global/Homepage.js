import { Grid, Typography } from "@mui/material";
import * as React from "react";

function Homepage() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography>Homepage</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Homepage;
