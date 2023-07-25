const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product Schema
const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    coverUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;
