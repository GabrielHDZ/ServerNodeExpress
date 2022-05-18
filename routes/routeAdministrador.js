/*   
--Administracion de las rutas asignadas al usuario vendedor
*/
let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const respuesta = require('../helpers/response');
const Cmysql= require(path.join('../controllers/controllerAdministrador'));

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
//INICIAR SESION EN CUENTA ADMNISTRADOR
router.route('/signin')
.post((req,res)=>{

});
//CREAR CUENTA ADMINISTRADOR
router.route('/signup')
.post((req,res)=>{

});
//CERRAR SESION EN CUENTA ADMINISTRADOR
router.route('/signout')
.post((req,res)=>{

});

module.exports=router;