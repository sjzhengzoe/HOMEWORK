import { request } from "@/plugins/request";

// 获取文章标签列表
export const getProfiles = (username) => {
  return request({
    method: "GET",
    url: `/api/profiles/${username}`,
  });
};

// 关注作者
export const followUser = (username) => {
  return request({
    method: "POST",
    url: `/api/profiles/${username}/follow`,
  });
};

// 取关作者
export const deleteFollowUser = (username) => {
  return request({
    method: "DELETE",
    url: `/api/profiles/${username}/follow`,
  });
};
