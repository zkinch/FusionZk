const express = require("express");
const router = express.Router();


const {
  loginUser,
  signUpUser
} = require("./controllers");

// Connecting API endpoints to the frontend. 
// The api are called in the controllers
router.post("/login", loginUser);

router.post("/signup", signUpUser);


module.exports = router;
