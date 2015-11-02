var FS = require('fs');
var AssetMan = require('bb-asset-manager');

var CORE_JS = [
  "bower/jquery/dist/jquery.min.js",
  "bower/bootstrap/dist/js/bootstrap.min.js",
  "bower/angular/angular.min.js",
]
var CORE_CSS = [
  "css/bootstrap.css",
  "bower/font-awesome/css/font-awesome.min.css",
]

var assetManager = module.exports = new AssetMan({
  useOriginalAssets: process.env.DEVELOPMENT,
  staticDirectory: __dirname + '/static',
  js: {
    outputDirectory: 'minified/js',
  },
  css: {
    outputDirectory: 'minified/css',
  }
});

assetManager.addCSS('core', {
  files: CORE_CSS,
})
assetManager.addJS('core', {
  files: CORE_JS,
})
assetManager.addCSS('home', {
  files: ['static/css/home.css'],
})
assetManager.addJS('home', {
  files: ['static/js/home.js'],
})


