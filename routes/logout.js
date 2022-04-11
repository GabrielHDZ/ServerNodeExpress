let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.clearCookie('galleta');
  res.redirect('/');
});

module.exports = router;
