const { check, body } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check("email")
        .notEmpty().withMessage("Tienes que escribir tu correo electrónico").bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido").bail()
        .custom(async (value, { req }) => {
            const user = await db.User.findOne({
                raw: true,
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                throw new Error("Este email no esta registrado. Registrese!");
            }
            return true;
        }),

    check("password")
        .notEmpty().withMessage("Tienes que escribir tu contraseña").bail()
        .custom(async (value, { req }) => {
            const user = await db.User.findOne({
                raw: true,
                where: {
                    email: req.body.email
                }
            });
            if(user){
                if (!bcryptjs.compareSync(req.body.password, user.password)) {
                    throw new Error("Contraseña incorrecta");
                }
            } else {
                throw new Error("Ingresa tu correo")
            }
            
            return true;
        }),
    
]