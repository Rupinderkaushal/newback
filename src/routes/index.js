const router = require('express').Router();
const loginController = require('../modules/controller/loginController');


router.post('/login',loginController.login);
router.post('/signup',loginController.signUp);



module.exports = router;