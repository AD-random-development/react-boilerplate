import * as React from "react";
import MuiAlert from "@mui/material/Alert";

import unsetNotification from "../../actions/global/global.action";
import { Snackbar } from "@mui/material";
import { connect } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props}></MuiAlert>
  );
});

function Notification(props) {
  const handleClose = () => {
    props.dispatch(unsetNotification());
  };

  return (
    <React.Fragment>
      {props.type === "error" && (
        <Snackbar
          open={props.notification.display}
          autoHideDiration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert
            onClose={handleClose}
            variant="filled"
            severity="error"
            sx={{ width: "100%" }}
          >
            {props.message}
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    notification: state.global.notification?.display,
    type: state.global.notification?.type,
    message: state.global.notification?.message,
  };
};

export default connect(mapStateToProps)(Notification);
