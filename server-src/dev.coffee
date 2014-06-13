express = require 'express'
config = require 'config'
server = express()

for key of config
    val = config[key]
    if typeof val == 'function'
        continue
    console.log "#{key}: #{val}"

server.configure_server = ->
    static_dir = __dirname + '/../static'
    @use config.url_prefix, express.static static_dir
    @locals.pretty = true
    haml_render_file = require('hamljs').renderFile
    render_haml = (path, options, callback) ->
        haml_options =
            locals: options
        haml_render_file path, 'utf8', haml_options, callback
    @engine '.haml', render_haml

server.configure_server()

render_page = (req, res) ->
    res.render 'home.haml', config: config

paths = ['', 'list', 'application', 'categories', 'info']

for p in paths
    server.get config.url_prefix + p, render_page

server.listen 9001
