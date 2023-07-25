const express = require("express");
const movieController = require("../controllers/movie.controller");
const auth = require('../middlewares/auth');
// const validate = require("../middlewares/requestValidator");
// const schemas = require("../validations/product");
const router = express.Router();

/* Movie Routes */

// get all movies
router.get("", auth, movieController.getMovies);

module.exports = router;
