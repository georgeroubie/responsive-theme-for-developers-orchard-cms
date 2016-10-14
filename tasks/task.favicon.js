var gulp = require('gulp'),
    favicons = require('gulp-favicons'),
    gutil = require('gulp-util');

var applicationName = 'Responsive Theme for Developers',
    applicationDescription = 'This a responsive theme for orchard cms, for developers',
    applicationPath = 'http://www.test.com',
    faviconBackground = '#ffffff',
    faviconPath = '/Themes/responsive-theme-for-developers-orchard-cms/img/favicons/';

gulp.task('favicon', function () {
    // Logo Size: 1500x1500 pixels
    return gulp.src('./img/dist/logo.png').pipe(favicons({
        appName: applicationName,                                       // Your application's name. `string`
        appDescription: applicationDescription,                         // Your application's description. `string`
        developerName: 'George Roubie',                                 // Your (or your developer's) name. `string`
        developerURL: 'https://gr.linkedin.com/in/georgeroubie',        // Your (or your developer's) URL. `string`
        background: faviconBackground,                                  // Background colour for flattened icons. `string`
        path: faviconPath,                                              // Path for overriding default icons path. `string`
        url: applicationPath,                                           // Website URL. `string`
        display: 'standalone',                                          // Android display: "browser" or "standalone". `string`
        orientation: 'portrait',                                        // Android orientation: "portrait" or "landscape". `string`
        start_url: '/',                                                 // Android start application's URL. `string`
        version: 1.0,                                                   // Your application's version number. `number`
        logging: false,                                                 // Print logs to console? `boolean`
        online: false,                                                  // Use RealFaviconGenerator to create favicons? `boolean`
        html: 'favicon.html',                                           // The file name with the html that is required for every device
        pipeHTML: true,       
        replace: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./img/favicons/'));
});