const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");

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
  .patch(postController.updatePost)
  .delete(postController.deletePost);

router.route("/author/:id").get(postController.getPostByAuthor);

module.exports = router;
