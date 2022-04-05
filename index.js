const {main}=require('./helpers/pupee.js');
const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.get('/puppeteer/',(req,res)=>{
    res.send('Inicializo el servicio de web scrapping');
})
app.listen(PORT,()=>{
    console.log('execute in port 3000')
})