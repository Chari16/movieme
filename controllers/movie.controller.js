const movieService = require("../services/movie.service");

addMovie = (req, res, next) => {
  return movieService.createMovie(req, res, next);
};

getMovies = (req, res, next) => {
  return movieService.getMovies(req, res, next);
};

getMovie = (req, res, next) => {
  return movieService.getMovie(req, res, next);
};

updateMovie = (req, res, next) => {
  return movieService.updateMovie(req, res, next);
};

deleteMovie = (req, res, next) => {
  return movieService.deleteMovie(req, res, next);
};

module.exports = {
  addMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
