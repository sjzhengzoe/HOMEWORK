import { request } from "@/plugins/request";

// 登录
export const login = (data) =>
  request({
    method: "POST",
    url: "/api/users/login",
    data,
  });

// 注册
export const register = (data) =>
  request({
    method: "POST",
    url: "/api/users",
    data,
  });
// 获取用户数据
export const getuser = () =>
  request({
    method: "GET",
    url: "/api/user",
  });

// 更新用户数据
export const update = (data) =>
  request({
    method: "PUT",
    url: "/api/user",
    data,
  });
