const express = require("express");
const userController = require("../controllers/userController");
const authContoller = require("../controllers/authController");

const router = express.Router();

// Signin & Signup
router.post("/signup", authContoller.signup);
router.post("/signin", authContoller.signin);
router.post("/signout", authContoller.signout);

// Get all users
router
  .route("/")
  .get(userController.getAllUsers)
  .delete(userController.deleteUser);

module.exports = router;
