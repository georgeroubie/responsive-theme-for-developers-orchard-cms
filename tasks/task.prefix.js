var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: [
                'Chrome 50',
                'Firefox 12',
                'Explorer 8',
                'Explorer 9',
                'Explorer 10',
                'Explorer 11',
                'Edge 12',
                'ExplorerMobile 11',
                'Safari 5',
                'iOS 6',
                'Opera 35'
            ]
        }))
        .pipe(gulp.dest('./css'))
});