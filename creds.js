var FS = require('fs');
var Path = require('path');

var Creds = {};
module.exports = Creds;

var credFiles = FS.readdirSync(Path.join(__dirname, 'creds'));

credFiles.forEach(function(f) {
  var ext = Path.extname(f);
  var base = Path.basename(f, ext);
  if (ext === '.json') {
    Creds[base] = JSON.parse(FS.readFileSync(Path.join(__dirname, 'creds', f)))
  } else if (ext === '.js') {
    Creds[base] = require('./creds/' + f);
  }
})

