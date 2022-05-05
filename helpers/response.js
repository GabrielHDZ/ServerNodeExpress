let sucess=(req,res,message='sucess',status=200, details='sin detalles especificos del mensaje')=>{
    console.log(message, status, details);
    res.status(status).json({
        error:'no',
        body:message
    })
}

let error =(req,res,message='error',status=400, details='detalles del mensaje no cargados')=>{
    console.log(message, status, details);
    res.status(status).json({
        error:'si',
        body:message
    })
}

module.exports={sucess,error}