const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const { products } = require("../services");

// Ana ürün oluşturma
router.post("/mainProduct", controller.productsController.createMainProduct);

// Alt ürün oluşturma
router.post("/subProduct", controller.productsController.createSubProduct);

// Ana ürünleri listeleme
router.get("/mainProducts", controller.productsController.getMainProducts);

// Ana ürün ID ile sorgulama
router.get(
  "/mainProductById/:id",
  controller.productsController.getMainProductById
);

// Alt ürün ID ile sorgulama
router.get("/subProduct/:id", controller.productsController.getSubProductById);

// Ana ürünü ve alt ürünleri silme
router.delete(
  "/mainProduct/:id",
  controller.productsController.deleteMainProduct
);

// Alt ürünü silme
router.delete(
  "/subProduct/:id",
  controller.productsController.deleteSubProduct
);
router.get(
  "/getMainProductByTitle/:title",
  controller.productsController.getMainProductByTitle
);

module.exports = {
  products: router,
};
