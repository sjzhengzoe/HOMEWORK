const { parseString } = require("xml2js");
const { promisify } = require("util");
const parse = promisify(parseString);
const createNodeHelpers = require("gatsby-node-helpers").default;

async function onCreateNode({ node, loadNodeContent, actions }) {
  const { createNode } = actions;
  if (node.internal.mediaType === "application/xml") {
    // 获取xml内容
    const xml = await loadNodeContent(node);
    // xml数据转换成对象
    const obj = await parse(xml, {
      explicitArray: false,
      explicitRoot: false,
    });
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: "XML",
    });
    // 将xml数据添加到数据层
    const createNodeObject = createNodeFactory("parsedContent");
    createNode(createNodeObject(obj));
  }
}

module.exports = {
  onCreateNode,
};
