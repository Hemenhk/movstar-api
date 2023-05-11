const express = require("express");
const cors = require("cors");
const xss = require("express-xss-sanitizer");
const cookieParser = require("cookie-parser");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Encoding"],
    exposedHeaders: ["Content-Encoding"],
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use(xss());

// Routes

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
