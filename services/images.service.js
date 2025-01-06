const Images = require("../models/image.model");
const fileService = require("./file.service");

exports.uploadImage = async (req, res) => {
  try {
    const { type } = req.params;
    const str = await fileService.uploadImageSystem(req, res);
    console.log(str);
    const image = new Images({
      url: str.fileString,
      type: type,
      name: str.name,
    });
    image.save();
    return image;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteImage = async (req) => {
  try {
    const { imageId } = req.params;
    const image = await Images.findByIdAndDelete(imageId);
    return image;
  } catch (error) {
    throw new Error(error);
  }
};
