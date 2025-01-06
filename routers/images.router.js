const express = require("express");
const controller = require("../controllers/index");
const router = express.Router();

router.post("/uploadImage", controller.imagesController.uploadImage);

module.exports = {
  images: router,
};
