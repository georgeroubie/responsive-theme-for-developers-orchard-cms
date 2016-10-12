var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concat', function () {
    return gulp.src([
        './lib/js/jquery.js',
        './lib/js/bootstrap.js',
        './lib/js/toastr.js',
        './js/lib/jquery.cookiebar.js',
        './js/lib/Lib.js',
        './js/src/custom.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js/dist/'));
});