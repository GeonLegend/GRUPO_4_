module.exports = function(req, res, next){
    /* Si no hay inicio de sesión renderizara la vista de login */
    if(!req.session.user){
        return res.redirect('/user/login');
    }
    next();
}