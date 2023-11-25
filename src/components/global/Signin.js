import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../actions/global/user.action";
import { Avatar, Box, Container, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { connect } from "react-redux";

function Signin(props) {
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  React.useEffect(() => {
    if (props.user) navigate(from, { replace: true });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    props.dispatch(login(loginData));
  };

  return (
    <React.Fragment>
      <Container component={"main"} maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon></LockOutlinedIcon>
          </Avatar>
          <Typography component={"h1"} variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            ></TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
            ></TextField>

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              loading={props.loading}
              startIcon={<VpnKeyIcon></VpnKeyIcon>}
              loadingPosition="start"
            >
              Sign In
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default connect()(Signin);
