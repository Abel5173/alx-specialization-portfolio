const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authControllers");

// Routes beginning with /api/auth
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
// This code defines the routes for the authentication endpoints. The /signup route is used to create a new user account, and the /login route is used to authenticate a user and generate a JWT token. The routes are defined using the post method, as they handle form submissions. The routes are exported so they can be used in the main application file.