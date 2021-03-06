let router = require('express').Router();
let jsonParser=require('body-parser').json();
let urlencodedParser = require('body-parser').urlencoded({ extended: false })
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const { insert,search,searchByid} =require(path.join(raiz,'controllers/controllerUsers'));

//prueba
const { generate} =require(path.join(raiz,'models/modelUsers.js'));

router.param('id',(req,res,next,id)=>{
  console.log('user acepted');
  next();
})
//get users in format JSON
router.get('/json/:id', (req, res, next)=> {
  res.setHeader('Content-type','application/json')
  res.send({'id':'<a>link</a>'});
  next();
});
//get users in format text HTML
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

router.get('/async',(req,res)=>{
  const {user,age,pass}=req.body;
    userAdd(user,age,pass)
    .then(data=>sucess(req,res,'respuesta del server',200,data))
    .catch(e=>error(req,res,'error encontrado',400,e))
    /* let {data}=JOSN.stringify(req.query);
    const search=await Busqueda.find(data);
    sucess(req,res,'lista de datos',200,search); */
});
router.post('/listar',(req,res)=>{
  search()
  .then(results=>sucess(req,res,results))
  .catch(e=>error(req,res,'error del servidor',500,e))
})
router.post('/listByid',(req,res)=>{
  const {username}=req.body;
  searchByid(username)
  .then(results=>sucess(req,res,results))
  .catch(e=>error(req,res,'error del servidor',500,e))
})
router.post('/insert',(req,res)=>{
  const data=req.body;
  insert(data)
  .then(results=>sucess(req,res,results))
  .catch(e=>error(req,res,'error del servidor',500,e))
})
router.get('/qr',(req,res,next)=>{
  generate('code madafaqa')
  .then(code=>{
    res.setHeader('Content-type','text/html')
    res.write(`<img src='${code}'></img>`);
    next();
  })
  .catch(e=>error(req,res,'error del servidor',500,e))
})
module.exports = router;
