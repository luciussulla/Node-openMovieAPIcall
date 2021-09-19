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

router.post('/search', (req,res,next)=> {
  const movieString = encodeURI(req.body.movie)
  request.get(`${rootUrl}s=${movieString}`, (err, response, data)=> {
    const movieData = JSON.parse(data)
    console.log(movieData)
    if(movieData.Search) {// If there is more than 1 movie like this
      res.render('index', {parsedData: movieData.Search})
    } else {  
      res.render('movie', {movieData})
    }
  })
})


module.exports = router;