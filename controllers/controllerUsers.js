const path =require('path')
const root=path.resolve();
const {main}=require(path.join(root,'helpers/dbMysqlConnect.js'));
//add
let insert=({username,nombre,age,genero,email})=>{
    const Query=`INSERT INTO servernode2.users value (NULL,'${username}','${nombre}',${age},'${genero}','${email}')`;
    return new Promise((resolve,reject)=>{
        main(Query,(error,results,fields)=>{
            if(error){
                reject(error);
            }
            resolve(results);
        })
    })
    
}
//search
let search=()=>{
    const query=`SELECT * FROM servernode2.users'`;
    return new Promise((resolve,reject)=>{
        main(query,(error,results,fields)=>{
            if(error){
                reject(error);
            }
            resolve(results);
        });
    })
}

//listar por id
let searchByid=(username)=>{
    const query=`SELECT * FROM servernode2.users WHERE username like '${username}'`;
    return new Promise((resolve,reject)=>{
        main(query,(error,results,fields)=>{
            if(error){
                reject(error);
            }
            resolve(results);
        });
    })
}
//acualizar todos los campos

//actualizar solo campos especificos

//borrar usuario


module.exports={search,searchByid,insert};
