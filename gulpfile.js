const gulp = require("gulp");
const webpack = require('webpack-stream');
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const del = require("del");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("src/assets/css/main.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//HTML

const html = () => {
  return gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"))
}

exports.html = html;

// Images

const images = () => {
  return gulp.src("src/assets/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("dist/assets/img"))
}

exports.images = images;

// Copy

const copy = () => {
  return gulp.src([
      "src/assets/fonts/*.{woff2,woff}",
      "src/assets/**/*.ico",
      "src/assets/img/**/*.{jpg,png,svg}",
      "src/assets/modules/**/*.{js,map,css}",
//      "src/assets/js/calendar.js",
//      "src/assets/js/calendar-events.js",
      "src/assets/js/weather.min.js",
      "src/assets/js/index.js",
      "src/assets/js/slider.js"
    ],
    {
      base: "src"
    })
    .pipe(gulp.dest("dist"));
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("dist");
}

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'dist'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = done => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("src/assets/css/**/*.scss", gulp.series("styles"));
  gulp.watch("src/*.html", gulp.series(html, reload));
  gulp.watch('src/assets/js/**/*.js', gulp.series(html, reload));
}

const jsbundle = () => {
  return gulp.src("src/entry.js")
    .pipe(webpack({config : require("./webpack.config.js")}))
    .pipe(gulp.dest("dist/assets/js/"));
}

 exports.jsbundle = jsbundle;

//Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    copy,
    images,
    jsbundle
  )
)

exports.build = build;

exports.default = gulp.series(
  clean,
  gulp.parallel(
    styles,
    html,
    copy,
    jsbundle
  ),
  gulp.series(
    server, watcher
  )
)

