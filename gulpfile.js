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
    return gulp.src('./scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

gulp.task('prefix', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['Chrome 50', 'Firefox 12', 'Explorer 8', 'Explorer 9', 'Explorer 10', 'Explorer 11', 'Edge 12', 'iOS 6', 'Opera 35', 'Safari 5', 'ExplorerMobile 11']
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('minify-css', function () {
    return gulp.src('./css/main.css')
      .pipe(cleanCSS({ debug: true }, function (details) {
          console.log(details.name + ': ' + details.stats.originalSize);
          console.log(details.name + ': ' + details.stats.minifiedSize);
      }))
      .pipe(gulp.dest('./css'));
});


gulp.task('concat', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        './node_modules/toastr/toastr.js',
        './js/lib/jquery.cookiebar.js',
        './js/lib/Lib.js',
        './js/src/custom.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('compress', function () {
    pump([
          gulp.src('./js/dist/main.js'),
          uglify(),
          gulp.dest('./js/dist/')
    ]);
});

// Copy fonts files from node_modules to the content folder of the theme
gulp.task('fonts', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/fontawesome-webfont.*',
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('./fonts/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './scss/*.scss',
        './scss/*/*.scss',
        './js/src/*.js',
         './js/src/*/*.js'
    ], function () {
        runSequence('sass', 'prefix', 'minify-css', 'concat', 'compress');
    });
});