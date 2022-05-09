let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const respuesta = require(path.join(raiz,'helpers/response'));
const Cmysql= require(path.join(raiz,'/controllers/controllerMysql'));

router.route('/')
    .get((req,res,next)=>{
        respuesta.sucess(req,res);
    })
    .post((req,res,next)=>{
        Cmysql.existUser(req)
        .then(m=>respuesta.sucess(req,res,m))
        .catch(e=>respuesta.error(req,res,e));
    });
router.route('/:username')
    .get((req,res)=>{
        if(!req.params.username){
            return respuesta.error(req,res,'falta dato',400,'no se recibieron datos en el header')
        }
        Cmysql.userByid(req.params.username,(error,result)=>{
            if(error){
                return respuesta.error(req,res,'error de servidor',500,error); 
            }
            respuesta.sucess(req,res,'falta formatear los resultados',200,result)
        });
    })
    .put()
    .delete();

module.exports=router;