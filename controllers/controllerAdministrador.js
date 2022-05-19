let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));
const modelo = require('../models/modelAdministrador')

exports.existUser=async(req)=>{
    let response=await conexion(req.body);
    return response;
}
exports.searchAdmins=async(callback)=>{
    let sentencia=`SELECT * FROM servernode2.administracion;`;
    try {
        await modelo.selectFromSimple(sentencia,(error,result)=>{
            if(error) return callback(error);
            callback(null,result);
        });
    } catch (error) {console.error(error);}
}

exports.signinAdmin=async({username,pass},callback)=>{
    //recibimos usuario y administrador y evaluamos el usuarios y password

    //uso de la libreria bycript para evaluar la password

    //creacion de la consulta sql qu devuelve el numero de veces que existe es usuario y la password
    let sentencia=`SELECT count(*) FROM servernode2.administracion WHERE username like "${username}" && pass like "${pass}";`;
    try {
        await modelo.selectCount(sentencia,(error,result)=>{
            console.log(typeof(result));
            if(error){return callback(error)}
            else{
                if(result['count(*)'] !== 1){return callback('error generado')}
                else{callback(error,result['count(*)'])}
            }      
        });
    } catch (error) {
        console.error(error)
    }
}
exports.signupAdmin=async({username,pass,tipe},callback)=>{
    let sentencia=`insert into servernode2.administracion`
}
