const path = require("path");
const userModel = require("../data/model");

const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { Console } = require("console");

const userss = require('../data/users.json');
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

    getLogin: (req, res) => {
        res.render('login', { errorMessage: '' });
    },
    postLogin: (req, res) => {
        const { email, password } = req.body;
        const user = userss.find(user => user.email === email && user.password === password);
        if (user) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.render('login', { errorMessage: 'El usuario o contraseña es incorrecto' });
        }
    },
    logout: (req, res) => {
        req.session.user = null;
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },
    showLogoutConfirmation: (req, res) => {
        res.render('logoutConfirmation');
    },
    getUserProfile: (req, res) => {
        res.render('userProfile');
    }
};

module.exports = userController;