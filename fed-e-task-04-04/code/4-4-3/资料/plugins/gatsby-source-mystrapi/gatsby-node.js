const axios = require("axios");
const pluralize = require("pluralize");
const createNodeHelpers = require("gatsby-node-helpers").default;

async function sourceNodes({ actions }, configOptions) {
  const { createNode } = actions;
  const { apiUrl, contentTypes } = configOptions;
  // Post => posts
  const types = contentTypes.map((type) => type.toLowerCase()).map((type) => pluralize(type));
  // 获取数据源
  let final = await getContents(types, apiUrl);

  for (let [key, value] of Object.entries(final)) {
    // 构建数据节点对象 allPostsContent allProductsContent
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: key,
    });
    const createNodeObject = createNodeFactory("content");
    // 根据数据节点对象创建节点
    value.forEach((item) => {
      createNode(createNodeObject(item));
    });
  }
}

async function getContents(types, apiUrl) {
  const size = types.length;
  let index = 0;
  // {posts: [], products: []}
  const final = {};
  await request();
  async function request() {
    if (index == size) return;
    let { data } = await axios.get(`${apiUrl}/${types[index]}`);
    final[types[index++]] = data;
    await request();
  }
  return final;
}

module.exports = {
  sourceNodes,
};
