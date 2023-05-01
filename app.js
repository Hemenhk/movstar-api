const express = require("express");
const cors = require("cors");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(cors());
// Routes

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
