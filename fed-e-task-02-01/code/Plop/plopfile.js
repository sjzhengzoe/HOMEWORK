// Plop 入口文件 需要导出一个函数
// 此函数接受一个 plop 对象 用于创建生成器任务
const { resolve } = require("path");
module.exports = (plop) => {
  plop.setGenerator("ar", {
    description: "create a React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "React component name",
        default: "MyComponent",
      },
      {
        type: "input",
        name: "type",
        message: "class or function",
        default: "class",
      },
    ],
    actions: [
      {
        // 代表添加文件
        type: "add",
        path: resolve("./{{name}}/index.jsx"),
        templateFile: "{{type}}" == "class" ? "plop-templates/React-components-jsx-class.hbs" : "plop-templates/React-components-jsx-function.hbs",
      },
      {
        // 代表添加文件
        type: "add",
        path: resolve("./{{name}}/style/index.scss"),
        templateFile: "plop-templates/React-components-scss.hbs",
      },
    ],
  });
};
