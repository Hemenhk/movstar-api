const express = require("express");
const movieController = require("./../controllers/movieController");
const authContoller = require("../controllers/authController")

const router = express.Router();

// Routes without ID
router
  .route("/")
  .get(movieController.getAllMovies)
  .post(movieController.createMovie);

// Routes with ID
router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
