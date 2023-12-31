const express = require('express')
const router = express.Router();
const products = require('../../controllers/apis/products');

router.get('/:id', products.detail);

module.exports = router;