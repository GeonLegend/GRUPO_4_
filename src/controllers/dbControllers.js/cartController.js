const { Cart, Product, CartProduct } = require('../../database/models');

module.exports = {
    /* Muestra la vista del carrito con los productos asociados a él */
    cartView: async (req, res) => {
        
        if(req.session.user == undefined){
            /* Si aun no hay datos guardados en sesion(osea no se logueo) se renderizara la vista */
            res.render("productCart");    
        }
        else{
            /* Sino va a renderizar el carrito con los datos registrados en la db */
            const cart = await Cart.findAll({raw: true, include: ["productosDelCarrito"], where:{ id: req.session.idCart }})
            res.render('productCart', {cart});
        }
    },

    /* Este metodo va para cuando se hace click en el boton de agregar al carrito de la vista detaller del producto */
    addToCart: async (req, res) => {
        /* Por ruta parametrizada se pasara el id del producto y el id del carrito estara en session */
        const productId = req.params.id;
        const cardId = req.session.idCart;
        const cartProduct = await CartProduct.findOne({
            raw: true,
            where: {
                idCart: cardId, 
                idProduct: productId,
            } 
        })
        
        /* Si no hay registro del producto en el carrito del usuario se le agrega uno nuevo*/
        if(cartProduct == null){
            CartProduct.create({
                idCart: cardId,
                idProduct: productId,
                number: 1,
            })
            return res.redirect("/");
        }

        /* Si hay registro del producto entonces se le suma 1 */
        CartProduct.update({
            number: cartProduct.number + 1
        },{
            where: {
                idCart: cardId, 
                idProduct: productId,
            }
        })

        return res.redirect("/");
    },

    addOne: async(req, res) =>{
        const productId = req.params.id;
        const cardId = req.session.idCart;

        const cartProduct = await CartProduct.findOne({
            raw: true,
            where: {
                idCart: cardId, 
                idProduct: productId,
            } 
        })

        await CartProduct.update({
            number: cartProduct.number + 1
        },{
            where: {
                idCart: cardId, 
                idProduct: productId,
            }
        })

        const cart = await Cart.findAll({raw: true, include: ["productosDelCarrito"], where:{ id: req.session.idCart }})
        res.render('productCart', {cart});
    },

    deleteOne: async(req, res) =>{
        const productId = req.params.id;
        const cardId = req.session.idCart;

        const cartProduct = await CartProduct.findOne({
            raw: true,
            where: {
                idCart: cardId, 
                idProduct: productId,
            } 
        })

        await CartProduct.update({
            number: cartProduct.number - 1
        },{
            where: {
                idCart: cardId, 
                idProduct: productId,
            }
        })

        const cart = await Cart.findAll({raw: true, include: ["productosDelCarrito"], where:{ id: req.session.idCart }})
        res.render('productCart', {cart});
    },
    
    deleteOfTheCart: async (req, res) =>{
        const cardId = req.session.idCart;
        const productId = req.params.id;

        await CartProduct.destroy({
            where: {
                idProduct: productId,
                idCart: cardId
            }
        })
        const cart = await Cart.findAll({raw: true, include: ["productosDelCarrito"], where:{ id: req.session.idCart }})
        res.render('productCart', {cart});
    }
};