import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { UserContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email || sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
