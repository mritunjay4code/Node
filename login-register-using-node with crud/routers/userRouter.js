const express = require('express');
const router = express.Router();
const userController = require("../controller/user");
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/update', userController.update);
router.post('/remove',userController.remove);
module.exports = router;