import * as React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  let location = useLocation();
  return props.user ? (
    props.element
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
