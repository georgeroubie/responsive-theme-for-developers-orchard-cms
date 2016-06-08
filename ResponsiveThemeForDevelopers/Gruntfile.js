module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON ('package.json'),
        less:{
            development: {
                options: {
                    compress: true
                },
                files: {
                    'Styles/Site.css': 'Styles/Site.less'
                }
            }
        },
        concat: {
            generated: {
                files: [
                    {
                        dest: 'Scripts/Site.js',
                        src: [
                            'Scripts/jquery.js',
                            'Scripts/jquery.cookiebar.js',
                            'Scripts/bootstrap.js',
                            'Scripts/Lib.js',
                            'Scripts/toastr.js',
                            'Scripts/Custom.js'
                        ]
                    }
                ]
            }
        },
        uglify: {
            build: {
                src: 'Scripts/Site.js',
                dest: 'Scripts/Site.js'
            }
        }
    });
    // Load the plugin that provides the task
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['less', 'concat', 'uglify']);
};