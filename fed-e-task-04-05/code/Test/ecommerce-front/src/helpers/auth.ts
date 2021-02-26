import { Jwt } from "../store/models/auth";

// 是否已登录
export function isAuth(): boolean | Jwt {
  let jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
}

export function isRole(): boolean {
  let jwt = localStorage.getItem("jwt");
  if (jwt) {
    const auth = JSON.parse(jwt);
    const {
      user: { role },
    } = auth as Jwt;
    return role === 1 ? true : false;
  }
  return false;
}
