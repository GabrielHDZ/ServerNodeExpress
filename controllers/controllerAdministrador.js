let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));
const modelo = require('../models/modelAdministrador')
const bcry=require('../helpers/bcrypt');

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
    let sentencia=`SELECT count(*) FROM servernode2.administracion WHERE username like "${username}";`;
    try {
        await modelo.selectCount(sentencia,(error,result)=>{
            console.log(typeof(result));
            if(error){return callback(error)}
            else{
                if(result['count(*)'] !== 1){return callback('error generado')}
                else{
                    let comparepass=`SELECT pass FROM servernode2.administracion WHERE username like "${username}";`;
                    modelo.selectFromSimple(comparepass,async(err,response)=>{
                        if(err) return callback('error');
                        let hash=response['pass'];
                        let compare=await bcry.compareHash(pass,hash);
                        if(compare===true){return callback(null,'accceso permitido')}
                        else{return callback('pass incorrecta')}
                    })
                    //callback(error,result['count(*)'])
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
        await modelo.insertInto(sentencia,(error,result)=>{
            if(error){return callback(error)}
            callback(null,result);
        })
    } catch (error) {
        console.log(error);
    }
}
