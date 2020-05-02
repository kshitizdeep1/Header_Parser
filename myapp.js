
var express = require('express');
var app = express();

app.get("/api/whoami",(req,res)=>{
  res.json({ipaddress:req.connection.remoteAddress,language:req.connection.language});
});

module.exports=app;