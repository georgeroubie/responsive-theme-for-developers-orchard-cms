var gulp = require('gulp'),
    concat = require('gulp-concat');

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