let path=require('path');
let raiz=path.resolve();
const {conexion,main}=require(path.join(raiz,'/helpers/dbMysqlConnect.js'));

exports.existUser=async(req)=>{

    let response=await conexion(req.body);
    return response;
}

exports.userByid=async(username)=>{
    let sentencia=`SELECT * FROM servernode2.users WHERE username like '${username}';`;
    let response="";
    try {
        await main(sentencia,(error,result)=>{
            if(error){
                throw new Error('exxx')
            }
            response=result;
        });
        return response;
    } catch (error) {
        console.log('error cacheado',error)
    }
    
}