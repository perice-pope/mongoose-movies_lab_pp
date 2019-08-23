var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

/* GET api/movies (index) */
router.get('/movies', moviesCtrl.index);

router.post('/movies', moviesCtrl.create);

module.exports = router;
