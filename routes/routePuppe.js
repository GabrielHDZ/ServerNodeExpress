let router = require('express').Router();
let jsonParser=require('body-parser').json();
let urlencodedParser = require('body-parser').urlencoded({ extended: false })
let path=require('path');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const { main } = require(path.join(raiz,'helpers/pupee'));

router.post('/',(req,res,next)=>{
    const {search}=req.body;
    main(search);
    next();
})

module.exports=router;