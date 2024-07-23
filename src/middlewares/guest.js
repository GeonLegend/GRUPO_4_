module.exports = function(req, res, next){
    /* Si hay un inicio de sesion renderizara la vista de perfil del usuario */
    if(req.session.user){
        return res.redirect('/user/userProfile');
    }
    next();
}