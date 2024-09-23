const express = require('express');
const router = express.Router();
const kirk = require('../controller/kirkcontroller');

router.get('/', kirk.main);
module.exports = router;