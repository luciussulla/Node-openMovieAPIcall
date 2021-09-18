var express = require('express');
var router = express.Router();

const apiRoute = 'http://www.omdbapi.com/?i=tt3896198&apikey=3d759e78'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
