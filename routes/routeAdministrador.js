/*   
--Administracion de las rutas asignadas al usuario vendedor
*/
let router = require('express').Router();
const respuesta = require('../helpers/response');
const administrador= require('../controllers/controllerAdministrador');

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
        administrador.searchAdmins((error,msg)=>{
            if(error) return respuesta.error(req,res,'error de servidor',500,error);
            return respuesta.sucess(req,res,msg,200,"todo bien")
        });
    })
    .post((req,res)=>{
        if(!req.body){
            return respuesta.error(req,res,"se requieren datos",404,"no se recibieron datos");
        }

    })
    .put()
    .delete();
//INICIAR SESION EN CUENTA ADMNISTRADOR
router.route('/signin')
    .post((req,res)=>{
        if(!req.body){
            return respuesta.error(req,res,"no se recibieron datos",404,"no se recibieron datos en el body");
        }
        administrador.signinAdmin(req.body,(error,msg)=>{
            if(error) return respuesta.error(req,res,"informacion no registrada",404,error);
            return respuesta.sucess(req,res,"ingresando...",200,`informacion valida, ${msg}`);
        });
    });
//CREAR CUENTA ADMINISTRADOR
router.route('/signup')
    .post((req,res)=>{
        if(!req.body) return respuesta.error(req,res,"el formulario no se recibio completo",404,"la informacion en el body esta incompleta");
        administrador.signupAdmin(req.body,(error,msg)=>{
            if(error) return respuesta.error(req,res,"error de servidor",500,error);
            return respuesta.sucess(req,res,"cuenta creada, inicie sesion",200,"cuenta creada correctamente");
        })
    });
//CERRAR SESION EN CUENTA ADMINISTRADOR
router.route('/signout')
    .post((req,res)=>{

    });

module.exports=router;