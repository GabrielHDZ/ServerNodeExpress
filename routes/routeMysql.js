let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const {conexion}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));


router.get('/',(req,res,next)=>{
    sucess(req,res);
});
router.post('/',(req,res)=>{
    conexion(req.body,(error,results,fields)=>{
        if(error){
            reject(error);
        }
        resolve(results);
    })
});

module.exports=router;