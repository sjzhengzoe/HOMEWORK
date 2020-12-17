const { src, dest, series, parallel, watch } = require("gulp");
const path = require("path");
const del = require("del");
const browserSync = require("browser-sync");
const bs = browserSync.create();

const loadPlugin = require("gulp-load-plugins");
const plugins = loadPlugin();

const cwd = process.cwd();
let config = {};

try {
  config = require(path.join(cwd, "auto.config.js"));
  console.log(config);
} catch (e) {}

const clean = () => {
  return del(["dist", "temp"]);
};

const style = () => {
  return src("src/assets/styles/*.scss", { base: "src" })
    .pipe(plugins.sass({ outputStyle: "expanded" }))
    .pipe(dest("temp"))
    .pipe(bs.reload({ stream: true }));
};

const script = () => {
  return (
    src("src/assets/scripts/*.js", { base: "src" })
      // 使用对象 require @babel/preset-env 就会在当前目录找 找不到就会到上一层目录找 如果是string 就会直接在项目下的node_modules目录去找 就会找不到
      .pipe(plugins.babel({ presets: [require("@babel/preset-env")] }))
      .pipe(dest("temp"))
      .pipe(bs.reload({ stream: true }))
  );
};

const page = () => {
  return src("src/**.html", { base: "src" })
    .pipe(plugins.swig({ data: config.data, defaults: { cache: false } }))
    .pipe(dest("temp"))
    .pipe(bs.reload({ stream: true }));
};

const image = () => {
  return src("src/assets/images/**", { base: "src" })
    .pipe(plugins.imagemin())
    .pipe(dest("dist"));
};

const font = () => {
  return src("src/assets/fonts/**", { base: "src" })
    .pipe(plugins.imagemin())
    .pipe(dest("dist"));
};

const extra = () => {
  return src("public/**", { base: "public" }).pipe(dest("dist"));
};

const server = () => {
  watch("src/assets/styles/*.scss", style);
  watch("src/assets/scripts/*.js", script);
  watch("src/**.html", page);
  // watch("src/assets/images/**", image);
  // watch("src/assets/fonts/**", font);
  // watch("public/**", extra);
  // 优化
  watch(
    ["src/assets/images/**", "src/assets/fonts/**", "public/**"],
    bs.reload
  );
  bs.init({
    notify: false,
    port: 3000,
    open: false,
    // 监听变化 改变时页面改变 这里用bs.reload({stream:true})代替
    // files: "dist/**",
    server: {
      baseDir: ["temp", "src", "public"],
      routes: {
        "/node_modules": "node_modules",
      },
    },
  });
};

const useref = () => {
  return (
    src("temp/*.html", { base: "temp" })
      .pipe(plugins.useref({ searchPath: ["temp", "."] }))
      // 会创建一个新文件vendor 对这些文件进行操作
      .pipe(plugins.if(/\.js$/, plugins.uglify()))
      .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
      .pipe(
        plugins.if(
          /\.html$/,
          plugins.htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          })
        )
      )
      .pipe(dest("dist"))
  );
};

const compile = parallel(style, script, page);

const build = series(
  clean,
  parallel(series(compile, useref), extra, image, font)
);

const develop = series(compile, server);

module.exports = {
  clean,
  build,
  develop,
};
