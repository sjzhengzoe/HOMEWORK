import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { isAuth } from "../../helpers/auth";

interface PrivateRouteProps extends RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        const auth = isAuth();
        if (auth) {
          return typeof Component === "string" ? <Redirect to={Component} /> : <Component />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
