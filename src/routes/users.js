const userController = require("../controllers/userController");
const dbUserController = require("../controllers/dbControllers.js/userController");
const express = require('express');
const multer = require("../middlewares/multerUser");
const registerValidations = require("../middlewares/expressRegisterValidator");
const loginValidations = require("../middlewares/expressLoginValidator");
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const router = express.Router();
 
router.get('/register', guest, userController.registro);
router.post('/register', multer.single("avatarFile"), registerValidations, dbUserController.proccessRegister);

router.get('/login', guest, dbUserController.getLogin);
router.post('/login', loginValidations, dbUserController.postLogin);
router.get('/confirmLogout', userController.showLogoutConfirmation);
router.get('/logout', dbUserController.logout);

router.get('/userProfile', auth, dbUserController.userDetail);
router.get('/userProfile/edit', auth, dbUserController.editView);
router.put('/userProfile/edit', dbUserController.edit);


module.exports = router;