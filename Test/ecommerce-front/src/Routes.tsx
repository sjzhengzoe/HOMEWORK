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
import AddProduct from "./components/admin/AddProduct";

// 区分是否是管理员
function adminOrUser(Admin: any, User: any): any {
  let role = isRole();
  return role ? Admin : User;
}

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        {/* 首页 */}
        <Route path="/" component={Home} exact />
        {/* 商品页 */}
        <Route path="/shop" component={Shop} />
        {/* 登录页 */}
        <Route path="/signin" component={SignIn} />
        {/* 注册页 */}
        <Route path="/signup" component={SignUp} />
        {/* 个人中心 - 管理员 */}
        <PrivateRoute
          path="/admin/dashboard"
          component={adminOrUser(AdminDashboard, "/user/dashboard")}
        />
        {/* 个人中心 - 用户 */}
        <PrivateRoute
          path="/user/dashboard"
          component={adminOrUser("/admin/dashboard", UserDashboard)}
        />
        {/* 添加分类 */}
        <PrivateRoute path="/create/category" component={adminOrUser(AddCategory, "/")} />
        {/* 添加商品 */}
        <PrivateRoute path="/create/product" component={adminOrUser(AddProduct, "/")} />
      </Switch>
    </HashRouter>
  );
}
