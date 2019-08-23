const Movie = require('../../models/movie');

module.exports = {
index, 
create
};

function create(req, res) {
    Movie.create(req.body).then(function(mov) {
        res.status(201).json(mov); 
    });
}

function index(req, res, next) {
    Movie.find({})
    .then(function(err, movies) {
        res.status(200).json(movies);
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
}