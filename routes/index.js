const express = require('express');
const router = express.Router();


router.use('/Api', require('./Api'));
module.exports = router;