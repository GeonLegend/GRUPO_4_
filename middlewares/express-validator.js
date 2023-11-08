const { check } = require('express-validator');
const path = require("path");

let validations = [
    check("name").notEmpty().withMessage("Tienes que escribir un nombre"),
    check("surname").notEmpty().withMessage("Tienes que escribir un apellido"),
    check("gender").notEmpty().withMessage("Tienes que elegir un genero"),
    check("email")
        .notEmpty().withMessage("Tiene que haber un correo electrónico").bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido"),
    check("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo de 8 characteres"),
    /* check("country").notEmpty().withMessage("Tienes que elegir un pais"), */
    /* check("age")
        .notEmpty().withMessage("Tienes que escribir tu edad").bail()
        .isInt().withMessage("Elige una edad"), */

    check("avatarFile").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];

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
