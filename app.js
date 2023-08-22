const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT||4444;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/producto-detalle', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, 'views', 'productCart.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname , 'views','register.html')));
app.listen(PORT, () => console.log('Escuchando puerto en el servidor: ' + PORT));