export default {
  router: {
    linkActiveClass: "active",

    extendRoutes(routes, resolve) {
      // 清除默认生成的路由表
      // routes.splice(0);
      routes.length = 0;
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout/"),
            children: [
              {
                path: "",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                path: "/login",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/register",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/profile/:username",
                component: resolve(__dirname, "pages/profile/"),
              },
              {
                path: "/settings",
                component: resolve(__dirname, "pages/settings/"),
              },
              {
                path: "/editor",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                path: "/article/:slug",
                component: resolve(__dirname, "pages/article/"),
              },
            ],
          },
        ]
      );
    },
  },
  server: {
    host: "0.0.0.0",
    port: "3000",
  },
  // 注册插件
  plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],
};
