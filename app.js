const express = require('express');
const app = express();
const path = require('path');

const rutasLogin = require('./routes/login.js');
const rutasRegister = require('./routes/register.js');
const rutasProductoDetalle = require('./routes/productDetail.js');
const rutasCarrito = require('./routes/productCart.js');
const rutasHome = require('./routes/home.js');

const PORT = process.env.PORT || 4444;
app.listen(PORT, console.log('Escuchándo en el puerto ' + PORT));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rutasHome);
app.use('/login', rutasLogin);
app.use('/producto-detalle', rutasProductoDetalle);
app.use('/carrito', rutasCarrito);
app.use('/registro', rutasRegister);

/* Comandos para instalar los modulos */
/* npm init */
/* npm install express */
/* npm install ejs */