const sass = require("sass");
const loadGruntTasks = require("load-grunt-tasks");
module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        implementation: sass,
      },
      main: {
        files: {
          "dist/css/main.css": "src/scss/main.scss",
        },
      },
    },
    babel: {
      options: {
        presets: ["@babel/preset-env"],
      },
      main: {
        files: {
          "dist/js/main.js": "src/js/main.js",
        },
      },
    },
    watch: {
      js: {
        files: ["src/js/*.js"],
        tasks: ["babel"],
      },
      css: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
      },
    },
  });

  // 1、一个一个插件的load
  // grunt.loadNpmTasks("grunt-sass");
  // 2、自动加载所有的 grunt 插件 中的任务
  loadGruntTasks(grunt);

  grunt.registerTask("default", ["sass", "babel", "watch"]);
};
