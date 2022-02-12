'use strict'

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const del = require("del");
const sync = require("browser-sync").create();
const webpack = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const autoprefixBrowsers = ['> 0.5%, last 2 versions, Firefox ESR, not dead'];

/**
 * Стили
 * @returns {*} scss-файл в css
 */
const styles = () => {
  return gulp.src("src/assets/css/main.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemap.write(".", {addComment: false}))
    .pipe(gulp.dest("assets/css"))
    .pipe(sync.stream());
}
/**
 * Экспорт задачи стилей
 * @type {function(): *}
 */
exports.styles = styles;

/**
 * Автопрефиксер
 * @returns {*}
 */
const autoPrefix = () => {
  return gulp
    .src(['assets/css/*.css', '!assets/css/*.min.css'], { cwd: "assets/css" })
    .pipe(
      autoprefixer({
        browsers: autoprefixBrowsers,
        cascade: false
      })
    )
    .pipe(gulp.dest("assets/css"));
}
/**
 * Экспорт задачи автопрефиксера
 * @type {function(): *}
 */
exports.autoPrefix = autoPrefix;


/**
 * JS-бандл
 * @returns {*} точка входа JS-бандла
 */
const jsbundle = () => {
  return gulp.src("src/entry.js")
    .pipe(webpack({config : require("./webpack.config.js"),
      externals: {
        jquery: 'jQuery'
      }
    }))
    .pipe(gulp.dest("assets/js/"));
}
/**
 * Экспорт задачи JS-бандла
 * @type {function(): *}
 */
exports.jsbundle = jsbundle;


/**
 * Изображения
 * @returns {*}
 */
const images = () => {
  return gulp.src("src/assets/img/**/*")
    .pipe(gulp.dest("assets/img"))
}

exports.images = images;

/**
 * Копирование файлов проекта из src папки
 * @returns {*} пути к исходникам
 */
const copy = () => {
  return gulp.src([
      "src/assets/fonts/*.*",
      "src/assets/modules/**/*.{js,map,css,json}",
      /*"src/assets/js/app.js"*/
    ],
    {
      base: "src/assets/"
    })
    .pipe(gulp.dest("assets"));
}

exports.copy = copy;

/**
 * Очистка папки assets перед копированием файлов
 * @returns {Promise<string[]> | *}
 */
const clean = () => {
  return del("assets");
}

/**
 * Сервер разработки
 * @param done
 */
const server = (done) => {
  sync.init({
    /**
     * Прокси для сервера
     */
    proxy: "isp"
  });
  done();
}

exports.server = server;

/**
 * Перезагрузка
 * @param done
 */
const reload = done => {
  sync.reload();
  done();
}

/**
 * Автообновление сервера при изменении файлов по этим путям
 */
const watcher = () => {
  gulp.watch("src/assets/css/**/*.scss", gulp.series("styles"));
  gulp.watch("src/*.html", gulp.series(reload));
  gulp.watch('src/assets/js/**/*.js', gulp.series(reload));
}

/**
 * Очистка папки с модулями перед копированием модулей
 * @returns {Promise<string[]> | *} удаление папки
 */
const cleanModules = () => {
  return del("src/assets/modules");
}

exports.cleanModules = cleanModules;

/**
 * Удаление иконочного шрифта перед копированием
 * @returns {Promise<string[]> | *}
 */
const cleanMDIFont = () => {
  return del("src/assets/fonts/materialdesignicons-webfont.woff2");
}

exports.cleanMDIFont = cleanMDIFont;

/**
 * Копирование модулей из папки node_modules в папку src
 * @returns {*}
 */
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

/**
 * Копирование шрифтов из папки
 * @returns {*}
 */
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

/**
 * Билд
 */
const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    autoPrefix,
    jsbundle,
    copy,
    images
  ),
)

exports.build = build;

/**
 * Копирование модулей и шрифтов из node_modules
 */
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
    autoPrefix,
    jsbundle,
    copy,
    images
  ),
  gulp.series(
    server, watcher
  )
)

