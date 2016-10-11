'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task('sass', function () {
    return gulp.src('./Styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./Styles'));
});

gulp.task('prefix', function () {
    return gulp.src('./Styles/main.css')
        .pipe(autoprefixer({
            browsers: ['Chrome 50', 'Firefox 12', 'Explorer 8', 'Explorer 9', 'Explorer 10', 'Explorer 11', 'Edge 12', 'iOS 6', 'Opera 35', 'Safari 5', 'ExplorerMobile 11']
        }))
        .pipe(gulp.dest('./Styles'))
});

gulp.task('minify-css', function () {
    return gulp.src('./Styles/main.css')
      .pipe(cleanCSS({ debug: true }, function (details) {
          console.log(details.name + ': ' + details.stats.originalSize);
          console.log(details.name + ': ' + details.stats.minifiedSize);
      }))
      .pipe(gulp.dest('./Styles'));
});


gulp.task('concat', function () {
    return gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './Scripts/jquery.cookiebar.js',
        './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
        './Scripts/Lib.js',
        './bower_components/toastr/toastr.js',
        './Scripts/Custom.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./Scripts/'));
});

gulp.task('compress', function (cb) {
    pump([
          gulp.src('./Scripts/main.js'),
          uglify(),
          gulp.dest('./Scripts/')
    ],
      cb
    );
});

// Copy fonts files from bower component to the content folder of the theme
gulp.task('fonts', function () {
    return gulp.src([
        './bower_components/components-font-awesome/fonts/fontawesome-webfont.*',
        './bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('./Content/Fonts/'));
});

gulp.task('watch-css', function () {
    gulp.watch('./Styles/**/*.scss', function () { runSequence('sass', 'prefix', 'minify-css') });
});

gulp.task('watch-js', function () {
    gulp.watch('./Scripts/**/*.js', function () { runSequence('concat', 'compress') });
});