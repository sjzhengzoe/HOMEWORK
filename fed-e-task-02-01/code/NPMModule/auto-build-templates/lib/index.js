const { src, dest, series, parallel, watch } = require("gulp");
const path = require("path");
const del = require("del");
const browserSync = require("browser-sync");
const bs = browserSync.create();

const loadPlugin = require("gulp-load-plugins");
const plugins = loadPlugin();

const cwd = process.cwd();
let config = {
  build: {
    src: "src",
    dist: "dist",
    temp: "temp",
    public: "public",
    paths: {
      styles: "assets/styles/*.scss",
      scripts: "assets/scripts/*.js",
      pages: "**.html",
      images: "assets/images/**",
      fonts: "assets/fonts/**",
    },
  },
};

try {
  const configJs = require(path.join(cwd, "auto.config.js"));
  config = Object.assign({}, config, configJs);
} catch (e) {}

const clean = () => {
  return del([config.build.dist, config.build.temp]);
};

const style = () => {
  return src(config.build.paths.styles, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.sass({ outputStyle: "expanded" }))
    .pipe(dest(config.build.temp))
    .pipe(bs.reload({ stream: true }));
};

const script = () => {
  return (
    src(config.build.paths.scripts, {
      base: config.build.src,
      cwd: config.build.src,
    })
      // 使用对象 require @babel/preset-env 就会在当前目录找 找不到就会到上一层目录找 如果是string 就会直接在项目下的node_modules目录去找 就会找不到
      .pipe(plugins.babel({ presets: [require("@babel/preset-env")] }))
      .pipe(dest(config.build.temp))
      .pipe(bs.reload({ stream: true }))
  );
};

const page = () => {
  return src(config.build.paths.pages, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.swig({ data: config.data, defaults: { cache: false } }))
    .pipe(dest(config.build.temp))
    .pipe(bs.reload({ stream: true }));
};

const image = () => {
  return src(config.build.paths.images, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.imagemin())
    .pipe(dest(config.build.dist));
};

const font = () => {
  return src(config.build.paths.fonts, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.imagemin())
    .pipe(dest(config.build.dist));
};

const extra = () => {
  return src("**", {
    base: config.build.public,
    cwd: config.build.public,
  }).pipe(dest(config.build.dist));
};

const server = () => {
  watch(config.build.paths.styles, { cwd: config.build.src }, style);
  watch(config.build.paths.scripts, { cwd: config.build.src }, script);
  watch(config.build.paths.pages, { cwd: config.src }, page);
  // watch("src/assets/images/**", image);
  // watch("src/assets/fonts/**", font);
  // watch("public/**", extra);
  // 优化
  watch(
    [config.build.paths.images, config.build.paths.fonts, config.build.public],
    { cwd: config.build.src },
    bs.reload
  );
  watch(["**"], { cwd: config.build.public }, bs.reload);
  bs.init({
    notify: false,
    port: 3000,
    open: false,
    // 监听变化 改变时页面改变 这里用bs.reload({stream:true})代替
    // files: "dist/**",
    server: {
      baseDir: [config.build.temp, config.build.src, config.build.public],
      routes: {
        "/node_modules": "node_modules",
      },
    },
  });
};

const useref = () => {
  return (
    src(config.build.paths.pages, {
      base: config.build.temp,
      cwd: config.build.temp,
    })
      .pipe(plugins.useref({ searchPath: [config.build.temp, "."] }))
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
      .pipe(dest(config.build.dist))
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
