const db = require('../../database/models');
const bcrypt = require('bcryptjs');
const sequelize = db.sequelize;

module.exports = {
    userDetail: async(req, res) => {
        const user = await db.User.findByPk(req.params.id, { raw: true });
        const rol = await db.UserType.findByPk(user.idUserType, { raw: true });
        res.render('userProfile', { user, rol });
    },

    getLogin: (req, res) => {
        res.render('login', { errorMessage: '' });
    },
    postLogin: async(req, res) => {
        const { email, password } = req.body;

        const user = await db.User.findOne({
            raw: true,
            where: {
                email: email
            }
        }); 
        /* bcrypt.compare(user.password, password */
        if (user) {
            req.session.user = user;            ;
            res.redirect('/');
        } else {
            res.render('login', { errorMessage: 'El usuario o contraseña es incorrecto' });
        }
    }    
}