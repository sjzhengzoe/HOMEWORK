import { Jwt } from "../store/models/auth";

// 是否已登录
export function isAuth(): boolean | Jwt {
  let jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
}
