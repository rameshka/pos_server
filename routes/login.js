var express = require('express');
var router = express.Router();
var userController  =  require('../controller/usersController');

router.get('/', (req, res) => {
  res.render('index')
});


router.post('/', (req, res) => {
  console.log(req.body);
  userController.authenticateToken(req,res);
});

module.exports = router;

