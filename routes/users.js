var express = require('express');
var router = express.Router();

router.param('id',(req,res,next,id)=>{
  console.log('user acepted');
  next();
})
/* GET users listing. */
router.get('/us/:id', (req, res, next)=> {
  res.send('hello world in path users');
  next();
});

router.get('/us/:id', (req, res) => {
  console.log('and this matches too');
  res.end()
})
module.exports = router;
