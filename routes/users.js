let router = require('express').Router();
let bodyParser=require('body-parser');
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const { userReceived} =require(path.join(raiz,'controllers/controllerUsers'));
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
  let jsonReq=JSON.stringify(req.body);
  //res.setHeader('Content-type','application/json')
  //res.status(201).send({'message':'recibido correctamtente','data':jsonReq})
  error(req,res,'datos no recibidos',401)
})

router.get('/async', async(req,res)=>{
  const {user,age,pass}=req.body
  try {
    await userReceived(user,age,pass);
    /* let {data}=JOSN.stringify(req.query);
    const search=await Busqueda.find(data);
    sucess(req,res,'lista de datos',200,search); */
  } catch (e) {
    error(req,res,'error capturado',400,e)
  }
})
module.exports = router;
