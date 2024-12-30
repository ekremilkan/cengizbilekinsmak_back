const { StatusCodes } = require("http-status-codes");
const productsService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");

exports.createMainProduct = async (req, res) => {
  try {
    const data = await productsService.products.createMainProduct(req);
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

exports.createSubProduct = async (req, res) => {
  try {
    const data = await productsService.products.createSubProduct(req);
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

exports.getMainProducts= async (req, res) => {
  try {
    const data = await productsService.products.getMainProducts();
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

exports.getMainProductById = async (req, res) => {
  try {
    const data = await productsService.products.getMainProductById(req);
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

exports.getSubProductById = async (req, res) => {
  try {
    const data = await productsService.products.getSubProductById(req);
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

exports.deleteMainProduct = async (req, res) => {
  try {
    const data = await productsService.products.deleteMainProduct(req);
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

exports.deleteSubProduct = async (req, res) => {
  try {
    const data = await productsService.products.deleteSubProduct(req);
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
