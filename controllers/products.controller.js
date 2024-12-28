const { StatusCodes } = require("http-status-codes");
const productsService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");

exports.createMainProductController = async (req, res) => {
  try {
    const data = await productsService.createMainProduct(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Ana ürün başarıyla oluşturuldu",
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

exports.createSubProductController = async (req, res) => {
  try {
    const data = await productsService.createSubProduct(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Alt ürün başarıyla oluşturuldu",
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

exports.getMainProductsController = async (req, res) => {
  try {
    const data = await productsService.getMainProducts();
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Ana ürünler başarıyla listelendi",
      code: StatusCodes.OK,
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

exports.getMainProductByIdController = async (req, res) => {
  try {
    const data = await productsService.getMainProductById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Ana ürün başarıyla getirildi",
      code: StatusCodes.OK,
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

exports.getSubProductByIdController = async (req, res) => {
  try {
    const data = await productsService.getSubProductById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Alt ürün başarıyla getirildi",
      code: StatusCodes.OK,
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

exports.deleteMainProductController = async (req, res) => {
  try {
    const data = await productsService.deleteMainProduct(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Ana ürün ve alt ürünler başarıyla silindi",
      code: StatusCodes.OK,
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

exports.deleteSubProductController = async (req, res) => {
  try {
    const data = await productsService.deleteSubProduct(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: data,
      timestamp: new Date(),
      message: "Alt ürün başarıyla silindi",
      code: StatusCodes.OK,
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
