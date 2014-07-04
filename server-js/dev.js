(function() {
  var config, express, key, p, paths, render_page, server, val, _i, _len;

  express = require('express');

  config = require('config');

  server = express();

  for (key in config) {
    val = config[key];
    if (typeof val === 'function') {
      continue;
    }
    console.log("" + key + ": " + val);
  }

  server.configure_server = function() {
    var haml_render_file, render_haml, static_dir;
    static_dir = __dirname + '/../static';
    this.use(config.url_prefix, express["static"](static_dir));
    this.locals.pretty = true;
    haml_render_file = require('hamljs').renderFile;
    render_haml = function(path, options, callback) {
      var haml_options;
      haml_options = {
        locals: options
      };
      return haml_render_file(path, 'utf8', haml_options, callback);
    };
    return this.engine('.haml', render_haml);
  };

  server.configure_server();

  render_page = function(req, res) {
    return res.render('home.haml', {
      config: config
    });
  };

  paths = ['', 'list', 'application', 'categories', 'info'];

  for (_i = 0, _len = paths.length; _i < _len; _i++) {
    p = paths[_i];
    server.get(config.url_prefix + p, render_page);
  }

  server.listen(9001);

}).call(this);
