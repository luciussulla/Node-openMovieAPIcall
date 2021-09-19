var express = require('express');
var router = express.Router();
// const apiRoute = 'http://www.omdbapi.com/?i=tt3896198&apikey=3d759e78'
const rootUrl = 'http://www.omdbapi.com/?apikey=3d759e78&'
const apiRoute = 'http://www.omdbapi.com/?apikey=3d759e78&s=Batman'
const request = require('request');

/* GET home page. */
router.use((req,res,next)=> {
  res.locals.rootUrl = rootUrl
  next()
})

router.get('/', function(req, res, next) {
  request.get(apiRoute, (err, response, data)=> {
    const parsedData = JSON.parse(data)

    res.render('index', {
      parsedData: parsedData.Search
    })

  })
});

router.get('/movie/:movieId', (req,res,next)=> {
    const movieId = req.params.movieId
    request.get(`${rootUrl}i=${movieId}`, (err, response, data)=> {
      const movieData = JSON.parse(data)
      res.render('movie', {
        movieData
      })
    })
})


module.exports = router;