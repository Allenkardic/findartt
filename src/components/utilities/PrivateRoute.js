import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        return authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

export default PrivateRoute;
