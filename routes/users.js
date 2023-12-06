const userController = require("../controllers/userController");
const express = require('express');
const multer = require("../middlewares/multer");
const validations = require("../middlewares/express-validator");
const router = express.Router();
 
router.get('/register', userController.registro);
router.post('/register', multer.single("avatarFile"), validations, userController.proccessRegister);
router.get('/login', userController.login);

module.exports = router;