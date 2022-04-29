const {conexion}=require('../helpers/dbMysqlConnect');
let router = require('express').Router();
let path=require('path');
const { route } = require('./home');
let raiz=path.resolve()
const { sucess,error } = require(path.join(raiz,'helpers/response'));
const { insert,search,searchByid} =require(path.join(raiz,'controllers/controllerUsers'));


route.get('/',(req,res)=>{
    conexion(req.body,query)
});