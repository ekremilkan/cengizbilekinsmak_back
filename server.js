const express = require("express");
const db = require("./db/index");
const configs = require("./configs/index");
const utils = require("./utils/index");
const middlewares = require("./middlewares/index");
const cors = require("cors");
const router = require("./routers/index");
const consts = require("./consts/index");

const app = express();

// CORS yapılandırması
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Başlangıç yapılandırmaları
configs.serverConfig.initialServerConfig();
utils.helper.createUploadDir("./uploads");

const PORT = process.env.PORT || 5005;

// Statik dosyalar ve JSON veri işleme
app.use("/uploads", express.static("uploads"));
app.use(express.json());

// Logger middleware'i kullan
app.use(middlewares.loggerMiddleware);

app.use(
  `${process.env.APP_PREFIX}${consts.router.PRODUCTS}`,
  router.productsRouter
);
app.use(
  `${process.env.APP_PREFIX}${consts.router.IMAGES}`,
  router.imagesRouter
);

db.mongooseConnection.connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
  });
});
