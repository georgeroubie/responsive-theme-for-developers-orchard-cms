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
        './node_modules/jquery/dist/jquery.js',
        './Scripts/src/jquery.cookiebar.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        './Scripts/src/Lib.js',
        './node_modules/toastr/toastr.js',
        './Scripts/src/custom.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./Scripts/dist/'));
});

gulp.task('compress', function () {
    pump([
          gulp.src('./Scripts/dist/main.js'),
          uglify(),
          gulp.dest('./Scripts/dist/')
    ]);
});

// Copy fonts files from node_modules to the content folder of the theme
gulp.task('fonts', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/fontawesome-webfont.*',
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('./Content/Fonts/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './Styles/*.scss',
        './Styles/components/*.scss',
        './Styles/layout/*.scss',
        './Styles/reusable/*.scss',
        './Styles/snippets/*.scss',
        './Scripts/src/custom.js'
    ], function () {
        runSequence('sass', 'prefix', 'minify-css', 'concat', 'compress');
    });
});