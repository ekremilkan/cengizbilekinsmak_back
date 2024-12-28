const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const Image = mongoose.model("Image", ImageSchema, "images");

module.exports = Image;
