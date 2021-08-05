'use strict'

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require("gulp-htmlmin");
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
  return gulp.src("src/assets/img/**/*")
    .pipe(gulp.dest("dist/assets/img"))
}

exports.images = images;

// Copy

const copy = () => {
  return gulp.src([
      "src/assets/fonts/*.{woff2,woff}",
      //"src/assets/**/*.ico",
      //"src/assets/img/**/*.{jpg,png,svg}",
      "src/assets/modules/**/*.{js,map,css}",
      "src/assets/js/*.{js,map,css}"
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

const cleanassets = () => {
  return del("assets");
}

exports.cleanassets = cleanassets;

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

const assetscopy = () => {
  return gulp.src([
      "dist/assets/**/*.*"
    ],
    {
      base: "dist/assets/"
    })
    .pipe(gulp.dest("assets"));
}

exports.assetscopy = assetscopy;

//Build

const build = gulp.series(
  clean,
  cleanassets,
  gulp.parallel(
    styles,
    html,
    copy,
    images
  ),
  assetscopy
)

exports.build = build;

exports.default = gulp.series(
  clean,
  cleanassets,
  gulp.parallel(
    styles,
    html,
    copy,
    images
  ),
  assetscopy,
  gulp.series(
    server, watcher
  )
)

