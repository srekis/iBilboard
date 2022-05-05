const express = require("express");
const router = express.Router();
const {trackBody, getCount} = require('../controllers/Controller')

router.post('/track', trackBody);

router.get('/count', getCount);

module.exports = router;