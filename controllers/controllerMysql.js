let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));

exports.existUser=async(req)=>{

    let response=await conexion(req.body);
    return response;
}

exports.userByid=async(username,callback)=>{
    let sentencia=`SELECT * FROM servernode2.users WHERE username like '${username}';`;
    let query=await main(sentencia);
    return query;
}