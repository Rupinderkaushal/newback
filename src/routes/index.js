const router = require('express').Router();
const loginController = require('../modules/controller/loginController');


router.post('/login',loginController.login);
router.post('/signup',loginController.signUp);
router.post('/add-expenses',loginController.addExpense);
router.get('/list-expenses',loginController.listExpense);
router.delete('/delete-expense/:id',loginController.delelteExpenses);
router.post('/edit-expense/:id',loginController.editExpenses);
router.get('/fetch-by-id/:id',loginController.fetchById);



module.exports = router;