const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const rutasLogin = require('./routes/login.js');
const rutasRegister = require('./routes/register.js');
const rutasProductoDetalle = require('./routes/productDetail.js');
const rutasCarrito = require('./routes/productCart.js');
const rutasHome = require('./routes/home.js');
const rutaProduct = require("./routes/products.js");
const exp = require('constants');

const PORT = process.env.PORT || 4444;
app.listen(PORT, console.log('Escuchándo en el puerto ' + PORT));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use((methodOverride('_method')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}))

app.use('/', rutasHome);
app.use('/login', rutasLogin);
app.use('/producto-detalle', rutasProductoDetalle);
app.use('/carrito', rutasCarrito);
app.use('/registro', rutasRegister);
app.use("/product", rutaProduct);

/* Comandos para instalar los modulos */
/* npm init */
/* npm install express */
/* npm install ejs */
/* npm install uuid */