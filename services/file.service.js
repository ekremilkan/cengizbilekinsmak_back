const utils = require("../utils/index");
const upload = require("../middlewares/index");

exports.uploadImage = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.singleImageUploadMiddleware(req, res, async (err) => {
      if (err) {
        reject(err);
      }
      const ip = await utils.helper.getHost();
      const filePath = process.env.FILE_PATH || "/uploads/";
      const fileName = req.file.filename;
      // URL'deki portu kaldırarak HTTPS ile oluşturuyoruz
      const fileString = `${ip}${filePath}${fileName}`;
      resolve(fileString);
    });
  });
};
