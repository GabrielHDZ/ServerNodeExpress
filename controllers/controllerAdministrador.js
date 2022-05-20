let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect'));
const modelo = require('../models/modelAdministrador')
const bcry=require('../helpers/bcrypt');

exports.existUser=async(req)=>{
    let response=await conexion(req.body);
    return response;
}
exports.searchAdmins=async(callback)=>{
    let sentencia=`SELECT * FROM servernode2.administracion;`;
    try {
        modelo.selectFromSimple(sentencia)
        .then(msg=>{return callback(null,msg)})
        .catch(error=>{return callback(error)});
    } catch (error) {return callback(error)}
}

exports.signinAdmin=async({username,pass},callback)=>{
    let sentencia=`SELECT count(*) FROM servernode2.administracion WHERE username like "${username}";`;
    try {
        await modelo.selectCount(sentencia,(error,result)=>{
            if(error){return callback(error)}
            else{
                if(result['count(*)'] !== 1){return callback('error generado')}
                else{
                    callback(error,result['count(*)'])
                }
            }      
        });
    } catch (error) {
        console.error(error)
    }
}
exports.signupAdmin=async({username,pass,tipe},callback)=>{
    try {
        //create hash for pass with bcrypt
        let code=await bcry.createHash(pass);
        sentencia=`insert into servernode2.administracion value (null,"${username}","${code}",${tipe});`;
        modelo.insertInto(sentencia)
        .then(msg=>{return callback(null,msg)})
        .catch(error=>{return callback(error)});
    } catch (error) {
        console.log(error);
    }
}
