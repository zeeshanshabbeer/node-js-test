const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/mediaController");
const authController = require("../controllers/authController");

// create blog
router.post("/postData", mediaController.postData);
// rcheck authentication
router.post("/login",authController.protect,mediaController.getData)

module.exports = router;
