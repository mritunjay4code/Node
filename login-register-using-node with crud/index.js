const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
app.use("/", userRouter);
app.set("view engine", 'ejs');

const server = app.listen(5000, (err) => {
    if(err){
        console.log("errore during server problem", err);
    }else{
        console.log("server is started", server.address().port);
    }
})