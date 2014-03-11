/*global module, require*/

module.exports = function(grunt) {
    'use strict';

    var config = {
            pkg: grunt.file.readJSON('package.json')
        },
        srcFiles = ['src/js/util.js',
                    'src/js/selection.js',
                    'src/js/core.js'];

    config.jslint = {
        files: ['src/js/**/*.js', 'spec/*.js', 'Gruntfile.js'],
        directives: {
            browser: true,
            unparam: true,
            todo: true,
            debug: true
        }
    };

    config.jasmine = {
        suite: {
            src: srcFiles,
            options: {
                specs: 'spec/*.spec.js',
                helpers: 'spec/helpers/*.js',
                styles: 'dist/css/*.css',
                junit: {
                    path: "reports/jasmine/",
                    consolidate: true
                },
                keepRunner: true,
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'reports/jasmine/coverage.json',
                    report: 'coverage'
                }
            }
        }
    };

    config.uglify = {
        options: {
            report: 'gzip'
        },
        build: {
            src: srcFiles,
            dest: 'dist/js/<%= pkg.name %>.min.js'
        }
    };

    config.csslint = {
        strict: {
            options: {
                'box-sizing': false,
                'import': 2
            },
            src: 'dist/css/**/*.css'
        }
    };

    config.compass = {
        dist: {
            options: {
                sassDir: 'src/sass',
                cssDir: 'dist/css',
                outputStyle: 'compressed',
                noLineComments: true
            }
        }
    };

    config.watch = {
        scripts: {
            files: ['src/js/**/*.js', 'spec/*.js', 'Gruntfile.js'],
            tasks: ['js'],
            options: {
                debounceDelay: 250
            }
        },
        styles: {
            files: 'src/sass/**/*.scss',
            tasks: ['css'],
            options: {
                debounceDelay: 250
            }
        }
    };

    config.concat = {
        options: {
            stripBanners: true
        },
        dist: {
            src: srcFiles,
            dest: 'dist/js/<%= pkg.name %>.js'
        }
    };

    config.plato = {
        feed: {
            files: {
                'reports/plato': srcFiles
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-plato');

    grunt.registerTask('test', ['jslint', 'jasmine', 'csslint']);
    grunt.registerTask('js', ['jslint', 'jasmine', 'uglify', 'concat']);
    grunt.registerTask('css', ['compass', 'csslint']);
    grunt.registerTask('default', ['js', 'css']);

};
