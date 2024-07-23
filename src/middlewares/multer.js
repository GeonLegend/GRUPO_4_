const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const productPath = "/crear-producto";
      const userPath = "/register";
      let imagePath = "";
      
      if(req.url.includes(productPath)) imagePath = "../public/images/products";
      if(req.url.includes(userPath)) imagePath = "../public/images/profile";

      cb(null, path.join(__dirname, imagePath));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname);
      cb(null, 'img' + '-' + uniqueSuffix);
    }
  })
  
module.exports = multer({ storage: storage });