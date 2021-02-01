##

熊导 我先去 react 保证完了再回来补这次作业~ 先别评分哈~

## 说说 application/json 和 application/x-www-form-urlencoded 二者之间的区别。

application/x-www-form-urlencoded 方式是比较老的一种方式，这种方式的好处就是浏览器都支持，

在请求发送过程中会对数据进行序列化处理，以键值对形式？key1=value1&key2=value2 的方式发送到服务器，

application/json，随着 json 规范的越来越流行，并且浏览器支持程度原来越好，许多开发人员易 application/json 作为请求 content-type，

告诉服务器请求的主题内容是 json 格式的字符串，服务器端会对 json 字符串进行解析，

这种方式的好处就是前端人员不需要关心数据结构的复杂度，

只要是标准的 json 格式就能提交成功，application/json 数据格式越来越得到开发人员的青睐

## 说一说在前端这块，角色管理你是如何设计的。

## @vue/cli 跟 vue-cli 相比，@vue/cli 的优势在哪？

CLI 2 和 CLI 3 第一个区别是 npm 包的包名，CLI 3 并没有沿用 CLI 2 的 vue-cli，而是另起为@vue/cli。创建项目方面也发生了变化，CLI 2 可以选择根据模板初始化项目，而 CLI 3 并未重新开发模板，
如果开发者想要像 CLI 2 一样使用模板初始化项目，可全局安装一个桥接工具@vue/cli-init。

CLI 2 和 CLI 3 第二个区别是: 生成的 vue 项目目录的命名改变，同时生成的目录结构，
CLI 3 也隐藏了 webpack 配置文件

link:https://gitpress.io/@rainy/vue-cli3

## 详细讲一讲生产环境下前端项目的自动化部署的流程。

## 你在开发过程中，遇到过哪些问题，又是怎样解决的？请讲出两点。

## 针对新技术，你是如何过渡到项目中？
