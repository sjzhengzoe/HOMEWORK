import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { isAuth } from "../../helper/auth";

interface PrivateRouteProps extends RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

const UserPrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const auth = isAuth();
        if (auth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default UserPrivateRoute;
