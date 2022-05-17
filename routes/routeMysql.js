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
router.route('/master')
    .get((req,res)=>{
        Cmysql.searchAdmins((error,result)=>{
            if(error){
                return respuesta.error(req,res,'error de servidor',500,error); 
            }
            respuesta.sucess(req,res,result,200,"todo bien");
        });
    })
    .post((req,res)=>{
        if(!req.body){
            return respuesta.error(req,res,"se requieren datos",404,"no se recibieron datos en el cuerpo de la peticion, es necesario el envio de dichos datos");
        }

    })
    .put()
    .delete();

router.route('/signin')
.post((req,res)=>{

});
router.route('/signup')
.post((req,res)=>{

});
router.route('/signout')
.post((req,res)=>{

});

module.exports=router;