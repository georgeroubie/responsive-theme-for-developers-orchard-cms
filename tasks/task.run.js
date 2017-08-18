var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('initialize', function () {
    runSequence('lib', 'minify-img', 'favicon', 'sass', 'prefix', 'minify-css', 'concatLib', 'compressLib', 'concatApp', 'compressApp');
});