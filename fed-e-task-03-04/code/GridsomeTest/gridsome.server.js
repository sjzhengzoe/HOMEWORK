module.exports = function(api) {
  // 获取数据
  api.loadSource(({ addCollection }) => {});

  // 创建页面
  api.createPages(({ createPage }) => {
    createPage({
      path: "/projects/:path",
      component: "./src/templates/Projects.vue",
    });

    createPage({
      path: "/journal/:path",
      component: "./src/templates/Journal.vue",
    });
  });
};
