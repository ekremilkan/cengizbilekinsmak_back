const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  }, // Alt ürünün adı

  imageUrl: {
    type: String,
  }, // Alt ürünün fotoğraf URL'si
  mainProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MainProduct",
  }, // Bağlı olduğu ana ürün
  details: { type: [String] },
});

// Ana Ürün Şeması
const MainProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  }, // Ana ürünün adı
  description: {
    type: String,
  }, // Ana ürünün açıklaması
  imageUrl: {
    type: String,
  }, // Ana ürünün fotoğraf URL'si
  subProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubProduct",
    },
  ], // Alt ürünlerin referansları
});

const SubProduct = mongoose.model("SubProduct", SubProductSchema);
const MainProduct = mongoose.model("MainProduct", MainProductSchema);

module.exports = { MainProduct, SubProduct };
