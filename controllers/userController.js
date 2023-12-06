const path = require("path");
const userModel = require("../data/model");

const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const users = userModel.getUsers();

userController = {
    registro: (req, res) => res.render('register'),

    proccessRegister: (req, res, next) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("register", {            
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let user = {
            id: users.length + 1,
            firstName: req.body.name,
            lastName: req.body.surname,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            gender: req.body.gender,
            customer: "user",
            avatar: req.file ? req.file.filename : 'default.png',
        };
        userModel.writeUser(user);
        return res.redirect("/");


    },

    login: (req, res) => res.render('login'),

};



module.exports = userController;