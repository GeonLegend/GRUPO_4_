const userController = require("../controllers/userController");
const dbUserController = require("../controllers/dbControllers.js/userController");
const express = require('express');
const multer = require("../middlewares/multer");
const validations = require("../middlewares/express-validator");
const router = express.Router();
 
router.get('/register', userController.registro);
router.post('/register', multer.single("avatarFile"), validations, userController.proccessRegister);

router.get('/login', dbUserController.getLogin);
router.post('/login', dbUserController.postLogin);
router.get('/logout', userController.logout);
router.get('/confirmLogout', userController.showLogoutConfirmation);
router.get('/userProfile/:id', dbUserController.userDetail);

module.exports = router;