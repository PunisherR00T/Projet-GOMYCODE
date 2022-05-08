const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
exports.Upload = multer({ storage: fileStorageEngine });