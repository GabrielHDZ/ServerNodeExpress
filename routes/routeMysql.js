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
router.route('/:id')
    .get()
    .put()
    .delete();

module.exports=router;