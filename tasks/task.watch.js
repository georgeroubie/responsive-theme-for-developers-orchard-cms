var gulp = require('gulp'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence');

gulp.task('watch', function () {
    gulp.watch([
        './scss/*.scss',
        './scss/*/*.scss',
    ], function () {
        runSequence('sass', 'prefix', 'minify-css');
    });
    gulp.watch([
        './js/src/*.js',
         './js/src/*/*.js'
    ], function () {
        runSequence('concat', 'compress');
    });
});