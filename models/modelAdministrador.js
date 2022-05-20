const conector=require('../helpers/dbMysqlConnect');


let selectFromSimple=(query)=>{
    return conector.main(query);
}

let selectCount= async(query,callback)=>{
        await conector.main(query)
        .then(results=>{return callback(null,results[0])})
        .catch(error=>{return callback(error)})
}

let insertInto= (query)=>{
    return conector.main(query);

}


module.exports={selectCount,insertInto,selectFromSimple}