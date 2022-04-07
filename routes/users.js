var express = require('express');
const { route } = require('./home');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next)=> {
  res.send('hello world in path users');
});
router.post('/',(req,res)=>{

})
module.exports = router;
