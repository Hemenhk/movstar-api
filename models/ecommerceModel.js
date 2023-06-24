const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A product must have a title"],
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
    price: {
      type: Number,
      required: [true, "A post must have a price"],
    },
    amount: {
      type: Number,
      required: [true, "A product must have an amount"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
