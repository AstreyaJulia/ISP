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
      "src/assets/js/app.js"
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

// Clean Modules before copy

const cleanModules = () => {
  return del("src/assets/modules");
}

exports.cleanModules = cleanModules;

// Clean MDI font before copy

const cleanMDIFont = () => {
  return del("src/assets/fonts/materialdesignicons-webfont.woff2");
}

exports.cleanMDIFont = cleanMDIFont;

// Copy modules from node_modules to src folder

const copyModules = () => {
  return gulp.src([
      "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
      "node_modules/bootstrap/dist/js/bootstrap.bundle.js.map",
      "node_modules/datatables.net/js/jquery.dataTables.js",
      "node_modules/fullcalendar/main.js",
      "node_modules/fullcalendar/locales/ru.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/jquery/dist/jquery.min.map",
      "node_modules/rrule/dist/es5/rrule-tz.js",
      "node_modules/rrule/dist/es5/rrule-tz.js.map",
      "node_modules/moment/moment.js",
      "node_modules/moment/locale/ru.js",
      "node_modules/flatpickr/dist/flatpickr.js",
      "node_modules/flatpickr/dist/l10n/ru.js",
      "node_modules/select2/dist/js/select2.full.js",
      "node_modules/select2/dist/js/i18n/ru.js",
      "node_modules/jquery-validation/dist/jquery.validate.js",
      "node_modules/jquery-validation/dist/localization/messages_ru.js",
      "node_modules/moment-timezone/builds/moment-timezone-with-data.js",
      "node_modules/@fullcalendar/moment-timezone/main.global.js",
      "node_modules/@fullcalendar/rrule/main.global.js",
      "node_modules/overlayscrollbars/js/OverlayScrollbars.js",
      "node_modules/apexcharts/dist/apexcharts.js",
      "node_modules/@ztree/ztree_v3/js/jquery.ztree.all.js",
    ],
    {
      base: "node_modules/"
    })
    .pipe(gulp.dest("src/assets/modules"));
}

exports.copyModules = copyModules;

// Copy fonts from node_modules to src fonts folder

const copyMDIFont = () => {
  return gulp.src([
      "node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2"
    ],
    {
      base: "node_modules/@mdi/font/fonts"
    })
    .pipe(gulp.dest("src/assets/fonts"));
}

exports.copyMDIFont = copyMDIFont;

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

const copyModulesFromNM = gulp.series(
  cleanModules,
  cleanMDIFont,
  gulp.parallel(
    copyModules,
    copyMDIFont
  ),
)

exports.copyModulesFromNM = copyModulesFromNM;

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

