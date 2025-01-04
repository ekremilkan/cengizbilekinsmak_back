const { MainProduct, SubProduct } = require("../models/products.model");

// Ana Ürün Oluşturma
exports.createMainProduct = async (req) => {
  try {
    const { name, description, imageUrl, subProducts } = req.body;

    // Aynı isimde bir ürün var mı kontrol et
    const existProduct = await MainProduct.findOne({ name });
    if (existProduct) {
      throw new Error("Ana ürün zaten mevcut.");
    }

    const mainProduct = new MainProduct({
      name,
      description,
      imageUrl,
      subProducts,
    });
    await mainProduct.save();
    return mainProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Alt Ürün Oluşturma
exports.createSubProduct = async (req) => {
  try {
    const { name, description, imageUrl, mainProductId } = req.body;

    // Ana ürün var mı kontrol et
    const mainProduct = await MainProduct.findById(mainProductId);
    if (!mainProduct) {
      throw new Error("Bağlantılı ana ürün bulunamadı.");
    }

    const subProduct = new SubProduct({
      name,
      description,
      imageUrl,
      mainProduct: mainProductId,
    });
    await subProduct.save();

    // Ana ürünün alt ürün listesine ekle
    await MainProduct.findByIdAndUpdate(mainProductId, {
      $push: { subProducts: subProduct._id },
    });

    return subProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Tüm Ana Ürünleri Getir
exports.getMainProducts = async () => {
  try {
    const mainProducts = await MainProduct.find().populate("subProducts");
    return mainProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Ana Ürün Detay Getir (ID ile)
exports.getMainProductById = async (req) => {
  try {
    const { id } = req.params;
    const mainProduct = await MainProduct.findById(id);
    if (!mainProduct) {
      throw new Error("Ana ürün bulunamadı.");
    }
    return mainProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Alt Ürün Detay Getir (ID ile)
exports.getSubProductById = async (req) => {
  try {
    const { id } = req.params;
    const subProduct = await SubProduct.findById(id).populate("mainProduct");
    if (!subProduct) {
      throw new Error("Alt ürün bulunamadı.");
    }
    return subProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Ana Ürün ve Alt Ürünleri Sil
exports.deleteMainProduct = async (req) => {
  try {
    const { id } = req.params;

    // İlgili ana ürünü bul ve alt ürünlerini sil
    const mainProduct = await MainProduct.findById(id);
    if (!mainProduct) {
      throw new Error("Ana ürün bulunamadı.");
    }

    await SubProduct.deleteMany({ mainProduct: id });
    await MainProduct.findByIdAndDelete(id);

    return { message: "Ana ürün ve alt ürünleri başarıyla silindi." };
  } catch (error) {
    throw new Error(error.message);
  }
};
// Alt Ürün Silme
exports.deleteSubProduct = async (req) => {
  try {
    const { id } = req.params;

    // Alt ürünü bul
    const subProduct = await SubProduct.findById(id);
    if (!subProduct) {
      throw new Error("Alt ürün bulunamadı.");
    }

    // Ana ürünün alt ürünler listesinden çıkar
    await MainProduct.findByIdAndUpdate(subProduct.mainProduct, {
      $pull: { subProducts: id },
    });

    // Alt ürünü sil
    await SubProduct.findByIdAndDelete(id);

    return { message: "Alt ürün başarıyla silindi." };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getMainProductByTitle = async (req) => {
  try {
    const { title } = req.params;
    const mainProduct = await MainProduct.findOne({ name: title });
    return mainProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};
