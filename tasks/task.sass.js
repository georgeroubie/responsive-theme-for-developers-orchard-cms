var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});