var express = require('express');
var router = express.Router();
var orderController =  require('../controller/orderController');


router.get('/', (req, res) => {
    orderController.getOrderData(req,res);
});
router.post('/', (req, res) => {
    orderController.saveOrderData(req,res);
});
module.exports = router;

