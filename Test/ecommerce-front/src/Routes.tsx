import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";
import SignIn from "./components/core/SignIn";
import SignUp from "./components/core/SignUp";
// 区分是否登录
import PrivateRoute from "./components/core/PrivateRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserDashboard from "./components/core/UserDashboard";
import { isRole } from "./helper/auth";
import React from "react";
import AddCategory from "./components/admin/AddCategory";
// 区分是否是管理员
function adminOrUser(Admin: any, User: any): any {
  let role = isRole();
  return role ? Admin : User;
}

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute
          path="/admin/dashboard"
          component={adminOrUser(AdminDashboard, <Redirect to="/user/dashboard" />)}
        />
        <PrivateRoute
          path="/user/dashboard"
          component={adminOrUser(UserDashboard, <Redirect to="/user/dashboard" />)}
        />
        <PrivateRoute path="/create/category" component={adminOrUser(AddCategory, null)} />
      </Switch>
    </HashRouter>
  );
}
