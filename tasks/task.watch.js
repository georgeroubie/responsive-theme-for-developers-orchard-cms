var gulp = require('gulp'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence');

gulp.task('watch', function () {
    gulp.watch([
        './scss/*.scss',
        './scss/*/*.scss',
    ], function () {
        runSequence('sass', 'prefix', 'minify-css', function () {
            console.log('SCSS compiled and compressed');
        });
    });
    gulp.watch([
        './js/src/*.js',
         './js/src/*/*.js'
    ], function () {
        runSequence('concatApp', 'compressApp', function () {
            console.log('JS combined and compressed');
        });
    });
});