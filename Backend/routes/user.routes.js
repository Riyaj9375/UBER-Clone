const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

// Routes

router.post(
  "/register",
  [
    // For Email Validation
    body("email").isEmail().withMessage("Invalid Email"),

    // For fullname Validation
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name is required"),

    // For password Validation
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  userController.registerUser
);

module.exports = router;
