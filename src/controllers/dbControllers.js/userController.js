const db = require('../../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const sequelize = db.sequelize;

module.exports = {
    userDetail: async (req, res) => {
        const user = await db.User.findByPk(req.session.user.id, { raw: true });
        const rol = await db.UserType.findByPk(user.idUserType, { raw: true });
        res.render('userProfile', { user, rol });
    },

    proccessRegister: (req, res, next) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                file: req.file,
                oldData: req.body
            })
        }

        db.User.create({
            firstName: req.body.name,
            lastName: req.body.surname,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            gender: req.body.gender,
            country: req.body.country,
            avatar: req.file ? req.file.filename : 'default.png',
        })

        return res.redirect("/");
    },

    getLogin: (req, res) => {
        res.render('login', { errorMessage: '' });
    },
    postLogin: async (req, res) => {        
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        const { remember } = req.body;

        const user = await db.User.findOne({
            raw: true,
            where: {
                email: req.body.email
            }
        });
        req.session.user = user;
        req.session.userRol = await db.UserType.findByPk(user.idUserType);
        if (remember == "on") {
            res.cookie('userEmail', email, { maxAge: 300000 });
            res.cookie('userPassword', password, { maxAge: 300000 });
        }
        res.redirect('/');
    },

    editView: (req, res) => {
        res.render('editUser', { user: req.session.user, rol: req.session.userRol });
    },

    edit: async (req, res) => {
        const user = req.session.user;
        console.log(req.body.password)
        if(!bcryptjs.compare(req.body.password, user.password)){
            await db.User.update({
                firstName: req.body.name,
                lastName: req.body.surname,
                email: req.body.email,
                gender: req.body.gender,
                country: req.body.country,
                /* avatar: req.file ? req.file.filename : 'default.png', */
            }, {
                where: {
                    id: user.id
                }
            });
        } else {
            await db.User.update({
                firstName: req.body.name,
                lastName: req.body.surname,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                gender: req.body.gender,
                country: req.body.country,
                /* avatar: req.file ? req.file.filename : 'default.png', */
            }, {
                where: {
                    id: user.id
                }
            });
        }

        const nuser = await db.User.findOne({
            raw: true,
            where: {
                id: user.id
            }
        });
        req.session.user = nuser;

        res.redirect('/');
    },

    logout: (req, res) => {
        res.clearCookie("userEmail");
        res.clearCookie("userPassword");
        req.session.user = null;
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },
}