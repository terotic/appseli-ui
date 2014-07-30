checkForImports = (details, shouldIncludeCallback) ->
    fs = require("fs")
    path = require("path")
    async = require("async")
    checkFileForModifiedImports = async.memoize((filepath, fileCheckCallback) ->
        fs.readFile filepath, "utf8", (error, data) ->
            checkNextImport = ->
                if (match = regex.exec(data)) is null # all @import files has been checked.
                    return fileCheckCallback(false)
                importFilePath = path.join(directoryPath, match[1] + ".less")
                fs.exists importFilePath, (exists) ->
                    # @import file does not exists.
                    return checkNextImport() unless exists # skip to next
                    fs.stat importFilePath, (error, stats) ->
                        if stats.mtime > details.time 
                            # @import file has been modified, -> include it.
                            fileCheckCallback true
                        else
                            # @import file has not been modified but, lets check the @import's of this file.
                            checkFileForModifiedImports importFilePath, (hasModifiedImport) ->
                                if hasModifiedImport
                                    fileCheckCallback true
                                else
                                    checkNextImport()

            directoryPath = path.dirname(filepath)
            regex = /@import (?:\([^)]+\) )?"(.+?)(\.less)?"/g
            match = undefined
            checkNextImport()
    )

    # only add override behavior to less tasks.
    if details.task is "less"
        checkFileForModifiedImports details.path, (found) ->
            shouldIncludeCallback found
            return
    else
        shouldIncludeCallback false
    return

module.exports = (grunt) ->
    grunt.initConfig
        pkg: '<json:package.json>'
        coffee:
            client:
                options:
                    sourceMap: true
                expand: true
                cwd: 'src'
                src: ['*.coffee']
                dest: 'static/js/'
                ext: '.js'
            server:
                expand: true
                cwd: 'server-src'
                src: ['*.coffee']
                dest: 'server-js/'
                ext: '.js'
        less:
            main:
                options:
                    paths: ['styles']
                files:
                    'static/css/appseli.css': 'styles/appseli.less'
                    'static/css/bootstrap.css': 'styles/bootstrap/bootstrap.less'
        'i18next-yaml':
            fi:
                src: 'locales/*.yaml'
                dest: 'static/locales/fi.json'
                options:
                    language: 'fi'
            en:
                src: 'locales/*.yaml'
                dest: 'static/locales/en.json'
                options:
                    language: 'en'
        haml:
            compile:
                options:
                    target: 'js'
                    language: 'js'
                    includePath: true
                    pathRelativeTo: './views/templates/'
 
                files:
                    'static/templates.js': ['views/templates/*.haml','views/templates/template/alert/*.haml','views/templates/template/carousel/*.haml','views/templates/template/rating/*.haml','views/templates/template/typeahead/*.haml']
        newer:
            options:
                override: checkForImports

        watch:
            express:
                files: [
                    'Gruntfile.coffee'
                    'server-src/*.coffee'
                    'config/*.yml'
                    'views/*.haml'
                ]
                options:
                    spawn: false
                tasks: ['coffee:server', 'express']
            'coffee-client':
                files: [
                    'src/*.coffee'
                ]
                tasks: 'newer:coffee:client'
            less:
                files: [
                    'styles/**/*.less'
                ]
                tasks: 'newer:less'
            i18n:
                files: [
                    'locales/*.yaml'
                ]
                tasks: 'i18next-yaml'
            haml:
                files: [
                    'views/templates/*.haml'
                    'views/templates/template/alert/*.haml'
                    'views/templates/template/carousel/*.haml'
                    'views/templates/template/rating/*.haml'
                    'views/templates/template/typeahead/*.haml'
                ]
                tasks: 'haml'
            livereload:
                options:
                    livereload: true
                files: ['static/**/*.js', 'static/**/*.css', 'views/*.haml']

        express:
            options:
                port: 9001
                spawn: true
            dev:
                options:
                    script: 'server-js/dev.js'

    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-haml'
    grunt.loadNpmTasks 'grunt-express-server'
    grunt.loadNpmTasks 'grunt-i18next-yaml'
    grunt.loadNpmTasks 'grunt-newer'

    grunt.registerTask 'default', ['newer:coffee', 'newer:less', 'newer:i18next-yaml', 'newer:haml']
    grunt.registerTask 'server', ['default', 'express', 'watch']
