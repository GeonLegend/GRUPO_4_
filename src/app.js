const express = require('express');
const app = express();
const path = require('path');
/* const bodyParser = require('body-parser'); */
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require("cookie-parser");

const rutasCarrito = require('./routes/cart.js');
const rutasHome = require('./routes/home.js');
const rutaProduct = require("./routes/products.js");
const rutaUser = require("./routes/users.js");
const productApi = require("./routes/apis/products.js");
const countApi = require("./routes/apis/totals.js");
const userApi = require("./routes/apis/user.js");
const userIsLogged = require('./middlewares/userIsLogged.js');

const exp = require('constants');

const PORT = process.env.PORT || 4444;

app.listen(PORT, console.log('Iniciando http://localhost:' + PORT));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use((methodOverride('_method')));
app.use(express.static(path.join(__dirname, 'public')));
/* app.use(bodyParser.urlencoded({ extended: false })); */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(cookies());

/* Verifica si hay datos el cokkies. Y si los hay inicia sesion automaticamente y guarda user en sesion */
app.use(userIsLogged);

/* Aceptar politicas de nose del sevidor para las apis */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

  /* RUTAS */
app.use('/', rutasHome);
app.use('/cart', rutasCarrito);
app.use("/product", rutaProduct);
app.use("/user", rutaUser);
app.use("/api/", countApi);
app.use("/api/product", productApi);
app.use("/api/user", userApi);

/* Comandos para instalar los modulos */
/* npm init */
/* npm install express */
/* npm install ejs */
/* npm install method-override */