var express = require('express');
var router = express.Router();
// const apiRoute = 'http://www.omdbapi.com/?i=tt3896198&apikey=3d759e78'
const apiRoute = 'http://www.omdbapi.com/?apikey=3d759e78&s=Batman'
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(apiRoute, (err, response, data)=> {
    const parsedData = JSON.parse(data)

    res.render('index', {
      parsedData: parsedData.Search
    })
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;