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

export const update = (data) =>
  request({
    method: "PUT",
    url: "/api/user",
    data,
  });
