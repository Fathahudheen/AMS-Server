const express = require('express')
const LoginController = require('../controllers/login.cntrl')
const router = express.Router();

router.post("/", LoginController.findOne);

module.exports = router;