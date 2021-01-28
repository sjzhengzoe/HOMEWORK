#!/usr/bin/env node
const path = require("path");
const { Readable } = require("stream");
const Koa = require("koa");
const send = require("koa-send");
const compilerSFC = require("@vue/compiler-sfc");

const app = new Koa();

// 接收流数据并转成字符串
const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    // 接受到数据
    stream.on("data", (chunk) => chunks.push(chunk));
    // 接收数据完毕 合并chunks 并转换成字符串
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    // 出错处理
    stream.on("error", reject);
  });

// 接收字符串并转成流
const stringToStream = (text) => {
  const stream = new Readable();
  stream.push(text);
  stream.push(null);
  return stream;
};

// 3. 加载第三方模块
app.use(async (ctx, next) => {
  // ctx.path --> /@modules/vue
  if (ctx.path.startsWith("/@modules/")) {
    const moduleName = ctx.path.substr(10);
    // 获取对应模块的 package.json 文件的路径
    const pkgPath = path.join(process.cwd(), "node_modules", moduleName, "package.json");
    const pkg = require(pkgPath);
    // 拼接路径 import vue from '/node_modules/vue/index.js'
    ctx.path = path.join("/node_modules", moduleName, pkg.module);
  }
  await next();
});

// 1. 静态文件服务器
app.use(async (ctx, next) => {
  await send(ctx, ctx.path, { root: process.cwd(), index: "index.html" });
  await next();
});

// 4. 处理单文件组件
app.use(async (ctx, next) => {
  if (ctx.path.endsWith(".vue")) {
    const contents = await streamToString(ctx.body);
    // 编译单文件组件 使用 @vue/compiler-sfc 进行编译
    const { descriptor } = compilerSFC.parse(contents);
    let code;

    // 两种情况
    if (!ctx.query.type) {
      // 第一次请求 不带type
      code = descriptor.script.content;
      // console.log(code)
      code = code.replace(/export\s+default\s+/g, "const __script = ");
      code += `
      import { render as __render } from "${ctx.path}?type=template"
      __script.render = __render
      export default __script
      `;
    } else if (ctx.query.type === "template") {
      // 第二次请求 带type
      // 编译模板
      const templateRender = compilerSFC.compileTemplate({ source: descriptor.template.content });
      code = templateRender.code;
    }
    ctx.type = "application/javascript";
    // 把string转换成流 因为下面是处理流
    ctx.body = stringToStream(code);
  }
  await next();
});

// 2. 修改第三方模块的路径
app.use(async (ctx, next) => {
  if (ctx.type === "application/javascript") {
    const contents = await streamToString(ctx.body);
    // import vue from 'vue' => import vue from '/@modules/vue'
    // import App from './App.vue' 不进行处理

    ctx.body = contents
      .replace(/(from\s+['"])(?![\.\/])/g, "$1/@modules/")
      // vue源码中需要通过这个变量判断如何打包 之前打包工具会帮我们处理 这里我们手动处理
      .replace(/process\.env\.NODE_ENV/g, '"development"');
  }
});

app.listen(3000);
console.log("Server running @ http://localhost:3000");
