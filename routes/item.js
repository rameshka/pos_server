var express = require('express');
var router = express.Router();
var orderController =  require('../controller/orderController');


router.get('/', (req, res) => {
    orderController.getItemData(req,res);
});

module.exports = router;

