const express = require("express");
const cors = require("cors");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/authRoutes")

app.use(express.json());
app.use(cors());
// Routes

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
