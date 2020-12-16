// Gulp 入口文件
// 1、基本写法一
// exports.foo = (done) => {
//   console.log("gulp working~");
//   // gulp 新版都是异步 所以需要手动 done 一下
//   done();
// };
// exports.default = (done) => {
//   console.log("gulp default~");
//   done();
// };

// 2、基本写法二
// const gulp = require("gulp");
// gulp.task("bar", (done) => {
//   console.log("bar working~");
//   done();
// });

// 3、串行执行任务 || 异步执行任务
// const { series, parallel } = require("gulp");
// const task1 = (done) => {
//   setTimeout(() => {
//     console.log("task1");
//     done();
//   }, 1000);
// };
// const task2 = (done) => {
//   setTimeout(() => {
//     console.log("task2");
//     done();
//   }, 1000);
// };
// const task3 = (done) => {
//   setTimeout(() => {
//     console.log("task3");
//     done();
//   }, 1000);
// };
// // 并行执行任务
// exports.foo = series(task1, task2, task3);
// // 串行执行任务
// exports.bar = parallel(task1, task2, task3);

// 4、异步任务的三种方式
// 第一种
// exports.normal = (done) => {
//   console.log("normal");
//   done();
// };
// exports.normal_error = (done) => {
//   console.log("normal_error");
//   done(new Error("normal_error"));
// };
// // 第二种
// exports.promise = () => {
//   console.log("promise");
//   return Promise.resolve();
// };
// exports.promise_error = () => {
//   console.log("promise_error");
//   return Promise.reject(new Error("promise_error"));
// };
// // 第三种
// const timeout = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// };
// exports.async = async () => {
//   await timeout(1000);
//   console.log("async");
// };

// // 另外 以下两种方式都可以执行成功 因为本质就是通过事件来监听任务结束
// const fs = require("fs");
// exports.stream1 = () => {
//   const readStream = fs.createReadStream("package.json");
//   const writeStream = fs.createWriteStream("temp.txt");
//   readStream.pipe(writeStream);
//   return readStream;
// };
// exports.stream2 = (done) => {
//   const readStream = fs.createReadStream("package.json");
//   const writeStream = fs.createWriteStream("temp.txt");
//   readStream.pipe(writeStream);
//   readStream.on("end", () => {
//     done();
//   });
// };

// 5、模拟gulp的工作原理
// const fs = require("fs");
// const { Transform } = require("stream");

// exports.default = () => {
//   const read = fs.createReadStream("index.css");
//   const write = fs.createWriteStream("index.min.css");

//   const transform = new Transform({
//     transform: (chunk, encoding, callback) => {
//       const input = chunk.toString();
//       const output = input.replace(/\s+/g, "").replace(/\/\*.+?\//g, "");
//       callback(null, output);
//     },
//   });

//   read.pipe(transform).pipe(write);
//   return read;
// };

// 6、文件操作API
// const { src, dest } = require("gulp");
// const cleanCss = require("gulp-clean-css");
// const rename = require("gulp-rename");
// exports.default = () => {
//   return src("index.css")
//     .pipe(cleanCss())
//     .pipe(rename({ extname: ".min.css" }))
//     .pipe(dest("dist"));
// };
