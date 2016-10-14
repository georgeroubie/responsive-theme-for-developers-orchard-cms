var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('run', function () {
    runSequence('lib', 'minify-img', 'favicon', 'sass', 'prefix', 'minify-css', 'concat', 'compress');
});