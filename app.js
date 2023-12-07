const express = require('express');
const app = express();
const path = require('path');
/* const bodyParser = require('body-parser'); */
const methodOverride = require('method-override');

const rutasProductoDetalle = require('./routes/productDetail.js');
const rutasCarrito = require('./routes/productCart.js');
const rutasHome = require('./routes/home.js');
const rutaProduct = require("./routes/products.js");
const rutaUser = require("./routes/users.js");
const prueba = require("./routes/prueba.js");

const exp = require('constants');

const PORT = process.env.PORT || 4444;
app.listen(PORT, console.log('Escuchándo en el puerto ' + PORT));
app.set("view engine", "ejs");

app.use((methodOverride('_method')));
app.use(express.static(path.join(__dirname, 'public')));
/* app.use(bodyParser.urlencoded({ extended: false })); */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', rutasHome);
app.use('/producto-detalle', rutasProductoDetalle);
app.use('/carrito', rutasCarrito);
app.use("/product", rutaProduct);
app.use("/user", rutaUser);

app.use("/", prueba);

/* Comandos para instalar los modulos */
/* npm init */
/* npm install express */
/* npm install ejs */
/* npm install method-override */