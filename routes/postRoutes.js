const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController")

const router = express.Router();

// Routes without ID
router
  .route("/")
  .get(postController.getAllPosts)
  .post(authController.authMiddleware, postController.createPost);

// Routes with ID
router
  .route("/:id")
  .get(postController.getPost)
  .patch(authController.protect, postController.updatePost)
  .delete(authController.protect, postController.deletePost);

module.exports = router;
