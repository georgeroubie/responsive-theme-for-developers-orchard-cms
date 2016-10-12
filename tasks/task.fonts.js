var gulp = require('gulp');

// Copy fonts files from node_modules to the content folder of the theme
gulp.task('fonts', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/fontawesome-webfont.*',
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'
    ])
    .pipe(gulp.dest('./fonts/'));
});