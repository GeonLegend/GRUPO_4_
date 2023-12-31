const express = require('express')
const router = express.Router();
const counts = require('../../controllers/apis/totals');

router.get('/counts', counts.index);

module.exports = router;