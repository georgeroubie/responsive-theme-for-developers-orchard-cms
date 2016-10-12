var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    printSpaceSavings = require('gulp-print-spacesavings');

gulp.task('compress', function () {
    return gulp.src('./js/dist/main.js')
            .pipe(printSpaceSavings.init())
            .pipe(uglify())
            .pipe(printSpaceSavings.print())
            .pipe(gulp.dest('./js/dist/'));
});