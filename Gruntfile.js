module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON ('package.json'),
        less:{
            development: {
                options: {
                    compress: false
                },
                files: {
                    'Styles/Site.css': 'Styles/Site.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'Styles/site.css': 'Styles/site.less'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['Chrome 50', 'Firefox 12', 'Explorer 8', 'Explorer 9', 'Explorer 10', 'Explorer 11', 'Edge 12', 'iOS 6', 'Opera 35', 'Safari 5', 'ExplorerMobile 11']
            },
            dist: {
                files: {
                    'Styles/Site.css': 'Styles/Site.css'
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
        },
        watch: {
            css: {
                files: ['Styles/*.less'],
                tasks: ['less:development', 'autoprefixer'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['Scripts/Custom.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the task
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('publish', ['less:production', 'autoprefixer', 'concat', 'uglify']);
};
