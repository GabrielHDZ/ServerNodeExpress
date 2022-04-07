var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.send('route home');
  console.log('Coockies',req.cookies);
});

module.exports = router;
