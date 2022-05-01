let path=require('path');
let raiz=path.resolve()
const {conexion}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));

let existUser=async(req)=>{

    let response=await conexion(req.body);
    return response;
}

module.exports={existUser}