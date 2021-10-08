'use strict'

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const del = require("del");
const sync = require("browser-sync").create();
const webpack = require('webpack-stream');

// Styles

const styles = () => {
  return gulp.src("src/assets/css/main.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("assets/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// JS

const jsbundle = () => {
  return gulp.src("src/entry.js")
    .pipe(webpack({config : require("./webpack.config.js"),
      externals: {
        jquery: 'jQuery'
      }
    }))
    .pipe(gulp.dest("assets/js/"));
}

exports.jsbundle = jsbundle;


// Images

const images = () => {
  return gulp.src("src/assets/img/**/*")
    .pipe(gulp.dest("assets/img"))
}

exports.images = images;

// Copy

const copy = () => {
  return gulp.src([
      "src/assets/fonts/*.{woff2,woff}",
      "src/assets/modules/**/*.{js,map,css,json}",
      "src/assets/js/app.js",
      "src/assets/js/index.js",
      "src/assets/js/slider.js",
      "src/assets/js/weather.min.js"
    ],
    {
      base: "src/assets/"
    })
    .pipe(gulp.dest("assets"));
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("assets");
}

// Server

const server = (done) => {
  sync.init({
    proxy: "isp"
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
  gulp.watch("src/*.html", gulp.series(reload));
  gulp.watch('src/assets/js/**/*.js', gulp.series(reload));
}

//Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    copy,
    images
  ),
)

exports.build = build;

exports.default = gulp.series(
  clean,
  gulp.parallel(
    styles,
    copy,
    images
  ),
  gulp.series(
    server, watcher
  )
)

