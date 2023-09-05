/* Prueba de productos */
const model = require("./model");

/*
let products = model.getProduct();
console.log(products[19]);

let product = {
    id: 21,
    category: "",
    name: "Funciona¿?",
    image: "product.jpg",
    price: 0,
    discount: 0,
    stock: 0,
    description: "",
    warranty: 0,
    rating: 0,
}

model.WriteProduct(product); */

/* Prueba de usuarios */

let users = model.getUser();
console.log(users[0]);

let user = {
    id: 0,
    firstName: "FUNCIONA?",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    customer: "",
    avatar: ""
}

model.writeUser(user);

