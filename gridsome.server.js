module.exports = function(api) {
  // 获取数据
  api.loadSource(({ addCollection }) => {
    // const { posts } = await axios.get('https://api.example.com/posts')
    // const collection = actions.addCollection({
    //   typeName: 'BlogPosts'
    // })
    // for (const post of posts) {
    //   collection.addNode({
    //     id: post.id,
    //     title: post.title
    //   })
    // }
  });

  // 创建页面
  api.createPages(({ createPage }) => {
    createPage({
      path: "/projects/:type",
      component: "./src/templates/Projects.vue",
    });
  });
};
