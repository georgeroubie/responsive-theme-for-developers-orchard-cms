var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    printSpaceSavings = require('gulp-print-spacesavings');

gulp.task('compressLib', function () {
    return gulp.src('./js/dist/libraries.js')
            .pipe(printSpaceSavings.init())
            .pipe(uglify())
            .pipe(printSpaceSavings.print())
            .pipe(gulp.dest('./js/dist/'));
});

gulp.task('compressApp', function () {
    return gulp.src('./js/dist/application.js')
            .pipe(printSpaceSavings.init())
            .pipe(uglify())
            .pipe(printSpaceSavings.print())
            .pipe(gulp.dest('./js/dist/'));
});