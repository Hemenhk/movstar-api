const mongoose = require("mongoose");
const slugify = require("slugify");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A movie must have a title"],
      unique: true,
      trim: true,
      maxLength: [250, "A movie must have less or equal to 250 chars"],
      minLength: [1, "A movie must have more or equal to 10 chars"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "A movie must have a description"],
    },
    ageLimit: {
      type: Number,
      required: [true, "A move must have an age limit"],
    },
    releaseDate: {
      type: Number,
      required: [true, "A movie must have a release date"],
    },
    director: {
      type: String,
      required: [true, "A movie must have a director"],
      unique: false,
      trim: true,
      minLength: [5, "A director must have more or equal to 5 chars"],
      maxLength: [100, "A director must have less or equal to 100 chars"],
    },
    writer: {
      type: String,
      required: [true, "A movie must have a writer"],
      unique: false,
      trim: true,
      minLength: [5, "A writer must have more or equal to 5 chars"],
      maxLength: [100, "A writer must have less or equal to 100 chars"],
    },
    stars: {
      type: String,
      required: [true, "A movie must have stars"],
      trim: true,
      minLength: [5, "A star must have more or equal to 5 chars"],
      maxLength: [300, "A star must have less or equal to 100 chars"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      min: [1, "Ratings must be above 1.0"],
      max: [5, "Ratings must be 5.0 or less"],
    },
    duration: {
      type: Number,
      required: [true, "A movie must have a duration"],
    },
    imageCover: {
      type: String,
      required: [true, "A movie must have an image cover"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
