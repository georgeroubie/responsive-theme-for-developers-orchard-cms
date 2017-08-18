var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concatLib', function () {
    return gulp.src([
        './lib/js/jquery.js',
        './lib/js/jquery.validate.js',
        './lib/js/bootstrap.js',
        './lib/js/toastr.js'
    ])
    .pipe(concat('libraries.js'))
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('concatApp', function () {
    return gulp.src([
        './js/src/cookiebar.js',
        './js/src/custom.js'
    ])
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./js/dist/'));
});