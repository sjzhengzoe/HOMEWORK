#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
// 如果是 Linux 或者 macOS 系统下还需要修改此文件的读写权限为755
// 具体就是通过 chmod 755 cli.js 实现修改

// 脚手架的工作过程
// 1、通过命令行交互询问用户问题 这里使用 inquirer
// 2、根据用户回答的结果生成文件
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const ejs = require("ejs");
const { result } = require("lodash");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Project name",
    },
  ])
  .then((answers) => {
    const tmplDir = path.join(__dirname, "template");
    const outDir = path.resolve("./");
    fs.readdir(tmplDir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        ejs.renderFile(path.join(tmplDir, file), answers, (err, result) => {
          if (err) throw err;
          fs.writeFileSync(path.join(outDir, file), result);
        });
      });
    });
  });
