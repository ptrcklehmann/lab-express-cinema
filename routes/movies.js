const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesList => {
        res.render('movies', {movies: moviesList} )
    })
    .catch(error => {
        console.log('Error while getting the movies from the DB: ', error)
        next(error)
    })
})

module.exports = router;