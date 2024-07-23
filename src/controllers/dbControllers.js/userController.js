const db = require('../../database/models');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const sequelize = db.sequelize;
const { Cart, CartProduct} = db

module.exports = {
    userDetail: async (req, res) => {
        const user = await db.User.findByPk(req.session.user.id, { raw: true });
        const rol = await db.UserType.findByPk(user.idUserType, { raw: true });
        res.render('userProfile', { user, rol });
    },

    proccessRegister: async(req, res, next) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                file: req.file,
                oldData: req.body
            })
        }

        await db.User.create({
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
        /* Se aplican las validaciones de express validator */        
        const resultValidation = validationResult(req);
        /* Si salta alguna validacion se renderizara la vista con el objeto de errores */
        if (resultValidation.errors.length > 0) {
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };

        const user = await db.User.findOne({
            raw: true,
            where: {
                email: req.body.email
            },
        }); 

        /* Evaluamos si el usuario tiene un carrito asociado y si no se le crea uno */
        let userCart = await Cart.findOne({raw: true, where: {idUser: user.id}})
        if(userCart == null){
            /* No Tiene carrito asociado entonces se le crea uno */
            await Cart.create({
            idUser: user.id,
            status: true,
            })
        }
        userCart = await Cart.findOne({raw: true, where: {idUser: user.id}})

        /* Se guardan datos en sesion tanto de usuario y su rol como el id del carrito */
        req.session.user = user;
        req.session.idCart = userCart.id;
        req.session.userRol = await db.UserType.findByPk(user.idUserType);
        
        /* Se comprueba si en el formulario esta activo la funcion de recordar usuario para mantener la sesion abierta con cookies */
        const { remember } = req.body;
        if (remember == "on") {
            res.cookie('userEmail', user.email, { maxAge: 300000 });
            res.cookie('userPassword', user.password, { maxAge: 300000 });
        }
        res.redirect('/');
    },

    editView: (req, res) => {
        res.render('editUser', { user: req.session.user, rol: req.session.userRol });
    },

    edit: async (req, res) => {
        const user = req.session.user;
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