const express = require('express');
const app = express();
const userRoutes = require('./routers/use');
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
app.use("/",userRoutes);
const server = app.listen(5555,(err)=>{

app.use(express.static("public"));     
    if(err){
        console.log("server error",err);
    }else{
        console.log("server is started...",server.address().port);
    }
});