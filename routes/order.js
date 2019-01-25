var express = require('express');
var router = express.Router();
var orderController =  require('../controller/orderController');

router.post('/save', (req, res) => {
    orderController.saveOrderData(req,res);
});

router.get('/', (req, res) => {
    orderController.getOrderData(req,res);
});

router.post('/update', (req, res) => {
    orderController.updateOrderData(req,res);
});

router.get('/getMax', (req, res) => {
    orderController.getMaxOrderID(req, res);
});

module.exports = router;