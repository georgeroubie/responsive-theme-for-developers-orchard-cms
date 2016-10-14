var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    printSpaceSavings = require('gulp-print-spacesavings');

gulp.task('minify-img', function () {
    return gulp.src('./img/src/*')
            .pipe(printSpaceSavings.init())
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(printSpaceSavings.print())
            .pipe(gulp.dest('./img/dist/'));
});