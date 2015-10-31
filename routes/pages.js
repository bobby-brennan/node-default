var Router = module.exports = require('express').Router();

Router.use(function(req, res) {
  res.locals({
    assetManager: require('../asset-manager.js'),
  })
})

Router.get('/', function(req, res) {
  res.render('home');
})
