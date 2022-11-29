const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/mediaController");
const authController = require("../controllers/authController");

// create blog
router.post("/postData",authController.protect, mediaController.postData);

module.exports = router;
