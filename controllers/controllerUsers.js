
//agregar
let userAdd=(user='none',age=0,pass='')=>{
    return new Promise((resolve,reject)=>{
        if(!user || !age || !pass){
            reject("no se han enviado todos los datos requeridos");
        }
        let dataUser={
            user,
            age,
            password:pass,
            createDate:new Date()
        }
        console.log(dataUser);
        resolve('datos recibidos correctamente',dataUser);
    })
    
}
//listar

//listar por id

//acualizar todos los campos

//actualizar solo campos especificos

//borrar usuario


module.exports={userAdd};