const { StatusCodes } = require("http-status-codes");
const imagesService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");

exports.uploadImage = async (req, res) => {
  try {
    const data = await imagesService.images.uploadImage(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Fotoğraf başarıyla kaydedildi",
      code: StatusCodes.CREATED,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: new Date(),
      message: "Hata oluştu",
      errorMessage: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
