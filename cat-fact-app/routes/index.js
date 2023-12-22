var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Cat App !' });
});

module.exports = router;
