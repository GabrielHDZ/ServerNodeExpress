let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const {existUser} = require(path.join(raiz,'/controllers/controllerMysql'));


router.get('/',(req,res,next)=>{
    sucess(req,res);
});
router.post('/',(req,res)=>{
    existUser(req)
    .then(m=>sucess(req,res,m))
    .catch(e=>error(req,res,e));
});

module.exports=router;