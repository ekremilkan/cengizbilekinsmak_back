const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

// Ana ürün oluşturma
router.post("/main-product", productsController.createMainProductController);

// Alt ürün oluşturma
router.post("/sub-product", productsController.createSubProductController);

// Ana ürünleri listeleme
router.get("/main-products", productsController.getMainProductsController);

// Ana ürün ID ile sorgulama
router.get(
  "/main-product/:id",
  productsController.getMainProductByIdController
);

// Alt ürün ID ile sorgulama
router.get("/sub-product/:id", productsController.getSubProductByIdController);

// Ana ürünü ve alt ürünleri silme
router.delete(
  "/main-product/:id",
  productsController.deleteMainProductController
);

// Alt ürünü silme
router.delete(
  "/sub-product/:id",
  productsController.deleteSubProductController
);

module.exports = router;
