import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { isAuth } from "../../helper/auth";

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
          console.log(Component, typeof Component === "string");
          return typeof Component === "string" ? <Redirect to={Component} /> : <Component />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
