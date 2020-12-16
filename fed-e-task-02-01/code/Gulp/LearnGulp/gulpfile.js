// Gulp 入口文件

// 写法一
exports.foo = (done) => {
  console.log("gulp working~");
  // gulp 新版都是异步 所以需要手动 done 一下
  done();
};
exports.default = (done) => {
  console.log("gulp default~");
  done();
};

// 写法二
const gulp = require("gulp");
gulp.task("bar", (done) => {
  console.log("bar working~");
  done();
});
