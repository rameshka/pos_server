var express = require('express');
var router = express.Router();
var userController  =  require('../controller/usersController');

router.get('/', (req, res) => {
  res.render('index')
});


router.post('/', (req, res) => {
  userController.authenticateUser(req,res);
});

module.exports = router;

