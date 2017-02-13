const express = require('express');
const config = require('../config');

const router = express.Router();

router.use('/query', require('./query'));

module.exports = router;
