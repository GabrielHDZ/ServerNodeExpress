let router = require('express').Router();
let bodyParser=require('body-parser');
let jsonParser=bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.param('id',(req,res,next,id)=>{
  console.log('user acepted');
  next();
})
/* GET users listing. */
router.get('/json/:id', (req, res, next)=> {
  res.setHeader('Content-type','application/json')
  res.send({'id':'<a>link</a>'});
  next();
});
router.get('/html/:id', (req, res, next)=> {
  res.setHeader('Content-type','text/html')
  res.write("<a href='/'>link</a>");
  next();
});
router.get('/*/:id', (req, res) => {
  console.log('and this matches too');
  res.end()
})
router.post('/json',jsonParser,urlencodedParser,(req, res) => {
  console.log(req.body);
  //res.setHeader('Content-type','application/json')
  res.send('se recibio');
})
module.exports = router;
