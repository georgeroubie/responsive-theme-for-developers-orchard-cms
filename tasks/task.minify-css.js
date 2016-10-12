var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    printSpaceSavings = require('gulp-print-spacesavings');

gulp.task('minify-css', function () {
    return gulp.src('./css/main.css')
            .pipe(printSpaceSavings.init())
            .pipe(cleanCSS())
            .pipe(printSpaceSavings.print())
            .pipe(gulp.dest('./css'));
});