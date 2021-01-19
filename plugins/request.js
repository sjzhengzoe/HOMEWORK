import axios from "axios";

// 创建请求对象
export const request = axios.create({
  baseURL: "https://conduit.productionready.io",
});

// 通过插件机制获取到上下文 query params req res
export default ({ store }) => {
  // 请求拦截器
  // 任何请求都要经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置 token
  request.interceptors.request.use(
    function(config) {
      const { user } = store.state;
      // 设置 config
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }
      // 返回 config 请求配置对象
      return config;
    },
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    function(error) {
      return Promise.reject(error);
    }
  );
};
