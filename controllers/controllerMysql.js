let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));

exports.existUser=async(req)=>{

    let response=await conexion(req.body);
    return response;
}

exports.userByid=async(username,callback)=>{
    let sentencia=`SELECT * FROM servernode2.users WHERE username like '${username}';`;
    try {
        await main(sentencia,(error,result)=>{
            if(error) callback(error)
            callback(error,result)
        });
    } catch (error) {
        console.error('error cacheado',error)
    }
    
}