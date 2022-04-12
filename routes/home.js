var express = require('express');
var router = require('express').Router();


const sendCookie=(req,res,next)=>{
  //cookies
  let user={
    name:'Csx',
    stage:'sleep'
  }
  res.cookie('galleta',user);
  next();
};
/* GET home page. */
router.get('/',sendCookie,(req, res, next)=> {
  console.log('Cookies',req.cookies);
  res.redirect('/')
});


module.exports = router;
