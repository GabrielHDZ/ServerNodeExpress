const {main} =require('../helpers/dbMysqlConnect');

let modelAdministrators= async(query,callback)=>{
    try {
        await main(query,(error,results)=>{
            if(error) return callback(error);
            callback(null,results)
        })
    } catch (error) {
        console.error('error capturado desde model',error)
    }
}

module.exports={modelAdministrators}