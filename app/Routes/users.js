var express = require('express');
var router = express.Router();
const UserController = require('../Controllers/UserController');

/* GET users listing. */
router.get('/', UserController.getUser);

module.exports = router;
