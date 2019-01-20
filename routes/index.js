var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({ express: 'Hello From Server' });
});

/*
router.post('/', (req, res) => {
  console.log(req.body);
  res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
*/

module.exports = router;
