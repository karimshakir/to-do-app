'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps =  require('gulp-sourcemaps');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const gutil = require('gulp-util');
const sasslint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');
const ngHtml2Js = require('gulp-ng-html2js');

const PUBLIC_FOLDER = './public';
const DISTRIBUTION_FOLDER = `${PUBLIC_FOLDER}/assets`;
const files = {
  js: [
    './app-web/app/app.js',
    './app-web/app/**/*.js',
    './app-web/app/**/**/*.js',
    './app-web/app/**/**/*.*.js',
  ],
  sass: [
    './app-web/stylesheets/todoozy/base/*.scss',
    './app-web/stylesheets/todoozy/mixins/*.scss',
    './app-web/stylesheets/todoozy/extends/*.scss',
    './app-web/stylesheets/todoozy/components/*.scss',
    './app-web/stylesheets/todoozy/*.scss',
    './app-web/stylesheets/*.scss',
  ],
  vendorStyles: [
    './app-web/vendor/angular-ui-tree/dist/angular-ui-tree.min.css',
    './app-web/vendor/jquery-ui/themes/base/tooltip.css',
    './app-web/vendor/angular-tablesort/tablesort.css',
    './app-web/vendor/animate.css/animate.css',
  ],
  vendorScripts: [
    './node_modules/babel-polyfill/dist/polyfill.min.js',
    './app-web/fox_animation/fox-anim_v1.min.js',
    './app-web/vendor/jquery/dist/jquery.min.js',
    './app-web/vendor/jquery-ui/jquery-ui.min.js',
    './app-web/vendor/angular/angular.min.js',
    './app-web/vendor/lodash/lodash.min.js',
    './app-web/vendor/angular-route/angular-route.min.js',
    './app-web/vendor/angular-webstorage/angular-webstorage.min.js',
    './app-web/vendor/angular-ui-router/release/angular-ui-router.min.js',
    './app-web/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './app-web/vendor/ng-table/dist/ng-table.min.js',
    './app-web/vendor/restangular/dist/restangular.min.js',
    './app-web/vendor/angular-tablesort/js/angular-tablesort.js',
  ],
  vendorMaps: [
    './app-web/vendor/jquery/dist/jquery.min.map',
    './app-web/vendor/angular/angular.min.js.map',
    './app-web/vendor/angular-route/angular-route.min.js.map',
  ],
  tests: './spec/app-web/**/**/**/*.js',
  publicAssets: [
    './app-web/public/*.html',
    './app-web/public/*.ico',
    './app-web/public/*.txt',
  ],
  images: [
    './app-web/images/*.png',
    './app-web/images/*.svg',
    './app-web/images/*.gif',
  ],
  views: './app-web/app/**/**/*.html',
};

gulp.task('clean', () => {
  return del(['public/**',], { force: true });
});

gulp.task('watch', () => {
  gulp.watch(files.js, ['js']);
  gulp.watch(files.tests, ['tests']);
  gulp.watch(files.sass, ['sass']);
  gulp.watch(files.views, ['views']);
  gulp.watch(files.images, ['images']);
});

gulp.task('js', () => {
  return gulp.src(files.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015'],
      }))
      .on('error', gutil.log)
      .pipe(concat('bundle.es6.js'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(DISTRIBUTION_FOLDER));
});

gulp.task('tests', () => {
  return gulp.src(files.tests)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('sass', () => {
  return gulp.src(files.sass)
    .pipe(sasslint({
      config: '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sourcemaps.init())
      .pipe(sass())
        .on('error', sass.logError, (err) => {
          console.error('Sass error: ', err);
        })
      .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false,
      }))
    .pipe(sourcemaps.write())
    .pipe(concat('todoozy.css'))
    .pipe(gulp.dest(DISTRIBUTION_FOLDER));
});

gulp.task('vendor:styles', () => {
  return gulp.src(files.vendorStyles)
    .on('error', gutil.log)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(DISTRIBUTION_FOLDER));
});

gulp.task('vendor:scripts', () => {
  return gulp.src(files.vendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(DISTRIBUTION_FOLDER));
});

gulp.task('vendor:source-maps', () => {
  return gulp.src(files.vendorMaps)
    .pipe(gulp.dest(DISTRIBUTION_FOLDER));
});

gulp.task('public:assets', () => {
  return gulp.src(files.publicAssets)
    .pipe(gulp.dest(PUBLIC_FOLDER));
});

gulp.task('images', () => {
  return gulp.src(files.images)
    .pipe(gulp.dest(DISTRIBUTION_FOLDER + '/images'));
});

gulp.task('views', () => {
  return gulp.src(files.views)
    .pipe(ngHtml2Js({
      moduleName: 'todoozyTemplates',
      prefix: 'todoozy/',
    }))
    .pipe(concat('partials.js'))
    .pipe(gulp.dest(DISTRIBUTION_FOLDER + '/views'));
});

gulp.task('default', [
  'sass',
  'js',
  'tests',
  'images',
  'views',
  'vendor:styles',
  'vendor:scripts',
  'vendor:source-maps',
  'public:assets',
]);
