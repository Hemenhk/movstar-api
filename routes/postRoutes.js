const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// Routes without ID
router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

// Routes with ID
router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
