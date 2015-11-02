var FS = require('fs');
var Strapping = require('strapping');
var Express = require('express');

var App = Express();

App.set('views', __dirname + '/views')
App.set('view engine', 'jade');
App.engine('jade', require('jade').__express);

App.use(require('compression')());
App.use(Express.static(__dirname + '/static'));

if (process.env.DEVELOPMENT) {
  var options =  {
    basePath: '/strapping',
    output: {
      styles: __dirname + '/static/css/bootstrap.css',
      settings: __dirname + '/static/css/bootstrap-config.json',
    },
  }
  App.use('/strapping', Strapping(options));
}

FS.readdirSync(__dirname + '/routes').forEach(function(route) {
  var path = '/' + route.substring(0, route.length - 3);
  if (path === '/pages') path = '/';
  App.use(path, require('./routes/' + route));
});

App.listen('3000');
