var FS = require('fs');
var AssetMan = require('bb-asset-manager');

var CORE_JS = [
  "bower/jquery/dist/jquery.min.js",
  "bower/bootstrap/dist/js/bootstrap.min.js",
  "bower/angular/angular.min.js",
]
var CORE_CSS = [
  "less/styles.css",
  "bower/fontawesome/css/font-awesome.min.css",
]

var assetManager = new AssetMan({
  useOriginalAssets: options.development,
  staticDirectory: __dirname + '/static',
  basePath: options.basePath,
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


