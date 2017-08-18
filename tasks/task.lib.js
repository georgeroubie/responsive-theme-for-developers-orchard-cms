var gulp = require('gulp');

var basePaths = {
    src: {
        nodeModules: './node_modules'
    },
    dest: {
        rootStyle: './lib/css',
        rootScript: './lib/js',
        rootFonts: './fonts'
    }
};

var libPaths = {
    src: {
        css: {
            bootstrap: `${basePaths.src.nodeModules}/bootstrap-sass/assets/stylesheets/**/**`,
            fontawesome: `${basePaths.src.nodeModules}/font-awesome/scss/**/**`,
            toastr: `${basePaths.src.nodeModules}/toastr/toastr.scss`
        },
        fonts: {
            bootstrap: `${basePaths.src.nodeModules}/bootstrap-sass/assets/fonts/bootstrap/*.*`,
            fontawesome: `${basePaths.src.nodeModules}/font-awesome/fonts/*.*`
        },
        js: {
            bootstrap: `${basePaths.src.nodeModules}/bootstrap-sass/assets/javascripts/bootstrap.js`,
            toastr: `${basePaths.src.nodeModules}/toastr/toastr.js`,
            jquery: `${basePaths.src.nodeModules}/jquery/dist/jquery.js`
        }
    }
};

gulp.task('lib', function () {
    // css
    for (var item in libPaths.src.css) {
        gulp.src(libPaths.src.css[item]).pipe(gulp.dest(`${basePaths.dest.rootStyle}/${item}`));
    }

    // fonts
    for (var item in libPaths.src.fonts) {
        gulp.src(libPaths.src.fonts[item]).pipe(gulp.dest(basePaths.dest.rootFonts))
    }

    // js
    for (var item in libPaths.src.js) {
        gulp.src(libPaths.src.js[item]).pipe(gulp.dest(basePaths.dest.rootScript))
    }
});