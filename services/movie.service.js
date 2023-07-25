const { successResponse } = require("../utils/apiResponse");
const movies = require('../movies-list.json');
/* ProductService */

getMovies = async (req, res, next) => {
  try {
    return successResponse(res, movies);
  } catch (e) {
    next(e);
  }
};

getMovie = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

createMovie = async (req, res, next) => {
  try {
  } catch(e) {
    next(e)
  }
}


deleteMovie = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

updateMovie = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
