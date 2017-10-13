var gulp = require('gulp');

var basePaths = {
    src: {
        nodeModules: './node_modules'
    },
    dest: {
        rootFonts: './fonts'
    }
};

var libPaths = {
    src: {
        fonts: {
            bootstrap: `${basePaths.src.nodeModules}/bootstrap-sass/assets/fonts/bootstrap/*.*`,
            fontawesome: `${basePaths.src.nodeModules}/font-awesome/fonts/*.*`
        }
    }
};

gulp.task('fonts', function () {
    // fonts
    for (var item in libPaths.src.fonts) {
        gulp.src(libPaths.src.fonts[item]).pipe(gulp.dest(basePaths.dest.rootFonts))
    }
});