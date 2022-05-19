const {main} =require('../helpers/dbMysqlConnect');

let selectFromSimple= async(query,callback)=>{
    try {
        await main(query,(error,results)=>{
            if(error) return callback(error);
            //seleccionamos la propiedad deseada del array que nos responde la consulta a la bd
            callback(null,results)

        })
    } catch (error) {
        console.error('error capturado desde model',error)
    }
}

let selectCount= async(query,callback)=>{
    try {
        await main(query,(error,results)=>{
            if(error) return callback(error);
            //seleccionamos la propiedad deseada del array que nos responde la consulta a la bd
            callback(null,results[0])

        })
    } catch (error) {
        console.error('error capturado desde model',error)
    }
}

module.exports={selectCount,selectFromSimple}