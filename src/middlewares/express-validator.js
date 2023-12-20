const { check, body } = require('express-validator');
const path = require("path");
const db = require('../database/models');

let validations = [
    check("name").notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength({ min: 2 }).withMessage("El nombre tiene que ser mayor a dos digitos"),
    check("surname").notEmpty().withMessage("Tienes que escribir un apellido"),
    check("gender").notEmpty().withMessage("Tienes que elegir un genero"),
    check("email")
        .notEmpty().withMessage("Tiene que haber un correo electrónico").bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido").bail()
        .custom( async(value, { req }) => {
            const user = await db.User.findOne({
                raw: true,
                where: {
                    email: req.body.email
                }
            }); 
            if(user){
                throw new Error ("Este email ya está registrado. Use otro");
            }
            return true;
        }),
    /* check("country").notEmpty().withMessage("Tienes que elegir un pais"), */
    /* check("age")
        .notEmpty().withMessage("Tienes que escribir tu edad").bail()
        .isInt().withMessage("Elige una edad"), */
    check("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo de 8 characteres").bail()
        .isStrongPassword({ minLowercase: 2, minUppercase: 2, minNumbers: 1, minSymbols: 1})
        .withMessage("La contraseña debe tener de minimo 1 letra mayúscula, 1 letra minúscula, 1 número y un carácter especial"),

    check("repassword")
        .notEmpty().withMessage("Tienes que repetir la contraseña").bail()
        .custom((value, { req }) => {
            if(req.body.password !== req.body.repassword){
                throw new Error ('Las contraseñas no coinciden');
            }

            return true;
        }),     

    check("avatarFile").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];  

        if(file){
            let fileExtensions = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtensions)){
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
        }
        return true;
    })
]

module.exports = validations;

