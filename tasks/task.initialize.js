var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('initialize', function () {
    runSequence(
        // Compress Images
        'minify-img',
        // Generate Favicon for multiple devices
        'favicon',
        // Copy fonts from node_modules
        'fonts',
        // SASS compiling, autoprefixing, compressing
        'sass',
        'prefix',
        'minify-css',
        // Generate the JS Files
        'concatLib',
        'compressLib',
        'concatApp',
        'compressApp',
        'watch'
    );
});