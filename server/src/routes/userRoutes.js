const express = require("express");
const router = express.Router();
const userController1 = require("../controllers/userControllers");


router.get("/", userController1 );

module.exports = router;