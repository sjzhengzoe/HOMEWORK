import { Menu } from "antd";
import { RouterState } from "connected-react-router";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAuth, isRole } from "../../helper/auth";
import { AppState } from "../../store/reducers";

function useActive(currentPath: string, path: string) {
  return currentPath === path ? "ant-menu-item-selected" : "";
}

function getDashboardUrl(): string {
  const auth = isAuth();
  let url = "/user/dashboard";
  if (auth) {
    if (isRole()) url = "/admin/dashboard";
  }
  return url;
}

export default function Navigation() {
  const router = useSelector<AppState, RouterState>((state) => state.router);
  const pathname = router.location.pathname;

  const dashboardClassName = useActive(getDashboardUrl(), pathname);
  const signinClassName = useActive("/signin", pathname);
  const signupClassName = useActive("/signup", pathname);

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={useActive("/", pathname)}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={useActive("/shop", pathname)}>
        <Link to="/shop">商城</Link>
      </Menu.Item>

      {isAuth() ? (
        // 已登录
        <Menu.Item className={dashboardClassName}>
          <Link to={getDashboardUrl()}>个人中心</Link>
        </Menu.Item>
      ) : (
        // 未登录
        <>
          <Menu.Item className={signinClassName}>
            <Link to="/signin">登录</Link>
          </Menu.Item>
          <Menu.Item className={signupClassName}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
