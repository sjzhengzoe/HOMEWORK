// Grunt 的入口文件
// 用于定义一些需要Grunt 自动执行的任务
// 需要导出一个函数
// 此函数接受一个 grunt 的形参,内部提供一些创建任务时可以用到的 API

module.exports = (grunt) => {
  // 1、执行一个任务 npx grunt foo
  // grunt.registerTask("foo", "some desc", () => {
  //   console.log("sujie1");
  // });
  //
  //
  // 2、执行两个任务 npx grunt foo bar
  // grunt.registerTask("foo", "some desc", () => {
  //   console.log("sujie1");
  // });
  // grunt.registerTask("bar", "some desc", () => {
  //   console.log("sujie2");
  // });
  //
  //
  // 3、执行默认任务 npx grunt
  // grunt.registerTask("default", "some desc", () => {
  //   console.log("sujie3");
  // });
  //
  //
  // 4、default 可以指定任务名称
  // grunt.registerTask("default", ["foo", "bar"]);
  //
  //
  // 5、异步任务执行 不能用箭头函数 因为要获取this
  // grunt.registerTask("async-task", "some desc", function () {
  //   const done = this.async();
  //   setTimeout(() => {
  //     console.log("sujie4");
  //     done();
  //   }, 1000);
  // });
  //
  //
  // 6、标记失败 会阻断下一个任务的执行 npx grunt
  // 7、采用 npx grunt --force 就不会阻断
  // grunt.registerTask("foo", "some desc", () => {
  //   console.log("sujie1");
  // });
  // grunt.registerTask("bad", "some desc", () => {
  //   console.log("sujie5");
  //   return false;
  // });
  // grunt.registerTask("default", ["bad", "foo"]);
  //
  //
  // 8、异步任务标记失败 npx grunt 不会阻断同步
  // grunt.registerTask("bad", "some desc", function () {
  //   const done = this.async();
  //   setTimeout(() => {
  //     console.log("sujie4");
  //     done(false);
  //   }, 1000);
  // });
  // grunt.registerTask("foo", "some desc", () => {
  //   console.log("sujie1");
  // });
  // grunt.registerTask("default", ["bad", "foo"]);
  //
  //
  // 9、初始化配置
  // grunt.initConfig({
  //   foo: "bar",
  // });
  // grunt.registerTask("foo", "some desc", () => {
  //   console.log(grunt.config("foo"));
  // });
  //
  //
  // 10、多目标模式 可以让任务根据配置行程多个子任务
  // grunt.initConfig({
  //   build: {
  //     options: {
  //       default: "3",
  //     },
  //     css: {
  // 如果设置了子任务的 options 则会覆盖掉 build 下的 options
  //       options: {
  //         default: "c",
  //       },
  //     },
  //     js: "2",
  //   },
  // });
  // // npx grunt build  会执行config下的build的内容 这里执行两个子任务
  // // npx grunt build:css 这里只会执行build的内容下的css 这里执行一个子任务
  // grunt.registerMultiTask("build", function () {
  //   // 获取当前任务的数据
  //   console.log("target", this.target, this.data);
  //   // options 不会当做子任务获取
  //   console.log("options", this.options());
  // });
  //
  //
  // 11、插件的基本使用
  // grunt.initConfig({
  //   clean: {
  //     temp: "src/app.js",
  //   },
  // });
  // // 删除某个文件
  // grunt.loadNpmTasks("grunt-contrib-clean");
  //
  //
};
