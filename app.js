const express = require("express");
const cors = require("cors");
const xss = require("express-xss-sanitizer");
const cookieParser = require("cookie-parser");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(cors());

app.use(express.json());
app.use(cookieParser());

// Routes

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.user("/api/product", productRoutes);

module.exports = app;
