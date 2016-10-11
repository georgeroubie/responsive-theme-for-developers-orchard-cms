'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

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

gulp.task('watch', function () {
    gulp.watch('./Styles/**/*.scss', function () { runSequence('sass', 'prefix', 'minify-css') });
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src([
        'bower_components/components-font-awesome/fonts/fontawesome-webfont.*',
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('Content/Fonts/'));
});