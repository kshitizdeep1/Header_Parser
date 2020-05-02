
app.get("/api/whoami",(req,res)=>{
  res.json({ipaddress:req.connection.remoteAddress,language:req.connection.language});
});