module.exports = function(api) {
  // 获取数据
  api.loadSource(({ addCollection }) => {});

  // 创建页面
  api.createPages(({ createPage }) => {
    createPage({
      path: "/projects/:type",
      component: "./src/templates/Projects.vue",
    });

    createPage({
      path: "/journal/:type",
      component: "./src/templates/Journal.vue",
    });
  });
};
