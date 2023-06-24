const Movie = require("./../models/movieModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllMovies = async (req, res) => {
  try {
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const movies = await features.query;


    res.status(200).json({
      status: "success",
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "Movie successfully created",
      data: {
        movie: newMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: { movie },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Invalid data sent",
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};
