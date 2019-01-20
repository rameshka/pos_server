var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.send('order view comes here');
});

module.exports = router;

