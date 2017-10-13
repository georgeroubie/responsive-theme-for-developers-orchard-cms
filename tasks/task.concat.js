var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concatLib', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        '../../Modules/Orchard.DynamicForms/Scripts/Lib.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        './node_modules/toastr/toastr.js'
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