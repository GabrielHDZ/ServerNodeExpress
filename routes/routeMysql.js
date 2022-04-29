let router = require('express').Router();
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));


router.get('/',(req,res,next)=>{
    sucess(req,res);
});

module.exports=router;