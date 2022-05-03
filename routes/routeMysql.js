let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const Cmysql= require(path.join(raiz,'/controllers/controllerMysql'));

router.route('/')
    .get((req,res,next)=>{
        sucess(req,res);
    })
    .post((req,res,next)=>{
        Cmysql.existUser(req)
        .then(m=>sucess(req,res,m))
        .catch(e=>error(req,res,e));
    });
router.route('/:username')
    .get((req,res,next)=>{
        console.log(req.params.username)
        if(!req.params.username){
            return error(req,res,'falta dato',400,'no se recibieron datos en el header')
        }
        Cmysql.userByid(req.params.username)
        .then(m=>sucess(req,res,m,200,"execute sucessfull"))
        .catch(e=>error(req,res,e,500,"error en la ejecucion de la consulta sql"))
    })
    .put()
    .delete();

module.exports=router;