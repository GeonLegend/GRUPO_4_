const db = require("../database/models");
const bcryptjs = require('bcryptjs');

module.exports = async (req, res, next) => {
    let emailCookie = req.cookies.userEmail;
    let passwordCookie = req.cookies.userPassword;
    
    if(emailCookie && passwordCookie){
        const user = await db.User.findOne({
            raw: true,
            where: {
                email: emailCookie,
            }
        });
        req.session.userRol = await db.UserType.findByPk(user.idUserType);
        req.session.user = user;
    }
    
    if(req.session.user)  {
        res.locals.user = req.session.user;
    } 
    next();
}