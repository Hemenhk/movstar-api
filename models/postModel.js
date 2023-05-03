const mongoose = require("mongoose");
const slugify = require("slugify");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A post must have a title"],
      trim: true,
      maxLength: [250, "A post must have less or equal to 250 chars"],
      minLength: [1, "A post must have more or equal to 10 chars"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "A post must have a description"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "A post must have a location"],
    },
    price: {
      type: Number,
      required: [true, "A post must have a price"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    owner: {
      type: String,
      required: [true, "A post must have an owner"],
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
    imageCover: {
      type: String,
      required: [true, "A post must have an image cover"],
    },
    images: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
