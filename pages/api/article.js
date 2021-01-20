import { request } from "@/plugins/request";

// 获取公共文章列表
export const getArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles",
    params,
  });
};

// 获取关注的用户的文章
export const getYourFeedArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles/feed",
    params,
  });
};

// 添加点赞
export const addFavorite = (slug) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/favorite`,
  });
};

// 取消点赞
export const deleteFavorite = (slug) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`,
  });
};

// 获取文章评论
export const getComments = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}/comments`,
  });
};

// 设置文章评论
export const setComments = (slug, data) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/comments`,
    data,
  });
};

// 获取文章
export const getArticle = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`,
  });
};

// 更新文章
export const updateArticle = (data, slug) => {
  return request({
    method: "PUT",
    url: `/api/articles/${slug}`,
    data,
  });
};

// 删除文章
export const deleteArticle = (slug) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}`,
  });
};

// 添加文章
export const addArticle = (data) => {
  return request({
    method: "POST",
    url: `/api/articles`,
    data,
  });
};
