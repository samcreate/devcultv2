module.exports = function(grunt) {
    var config = {
        jshint: {
            options: {
                ignores: ['node_modules/**', 'public/vendor/**', '**/*.min.js'],
                jshintrc: '.jshintrc'
            },
            gruntfile: 'Gruntfile.js',
            server: ['routes/**/*.js', 'app.js', 'config.js'],
            client: 'public/**/*.js'
        },
        stylus: {
            compile: {
                options: {
                    use: [
                        require('nib'),
                        require('jeet'),
                        require('rupture')
                    ]
                },
                files: {
                    'public/css/styles.css': ['public/stylus/*.styl']
                }
            }

        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'public/css',
                src: ['*.css', '!*.min.css'],
                dest: 'public/css',
                ext: '.min.css'
            },
            addBanner: {
                options: {
                    banner: '/*!\n* DevCult MotherFUCKERS\n* http://www.devcult.com/\n*\n* Copyright 2014, 2666 CULT Foundation, Inc. \n*/'
                },
                files: {
                    'public/css/styles.css': ['public/css/styles.min.css']
                }
            }
        },
        'node-inspector': {
            options: {
                'save-live-edit': true
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    nodeArgs: ['--debug'],
                    cwd: __dirname,
                    ignore: ['node_modules/', 'public/'],
                    ext: 'js',
                    watch: ['routes/**/*.js', 'app.js', 'config.js'],
                    delay: 1,
                    legacyWatch: true
                }
            }
        },
        watch: {
            all: {
                files: ['public/**/*', 'views/**', '!**/node_modules/**', '!public/vendor/**/*', '!**/*.min.*'],
                options: {
                    livereload: 3006
                }
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: 'jshint:gruntfile'
            },
            scripts: {
                files: 'public/js/**/*.js',
                tasks: 'jshint:client'
            },
            server: {
                files: ['routes/**/*.js', 'app.js', 'config.js'],
                tasks: 'jshint:server'
            },
            styl: {
                files: ['public/stylus/**/*.styl'],
                tasks: ['stylus', 'cssmin']
            }
        },
        concurrent: {
            tasks: ['nodemon', 'node-inspector', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    };

    grunt.initConfig(config);

    // Load the tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'stylus', 'cssmin', 'concurrent']);
};