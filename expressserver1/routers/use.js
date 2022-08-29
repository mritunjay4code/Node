const express = require('express');
const router = express.Router();
router.get("/login", (require , response) => {
    const obj = require.query;
    if(obj.userid == obj.pwd){
        response.send("Welcome &nbsp;"+obj.userid);
    }
    else{
        response.send("invalide user and password")
    }
    //console.log(require.query);
    //response.send("welcome");
});

router.post("/login", (require , response) => {
    console.log("post data comes in the body",require.body);
    const obj = require.body;
    if(obj.userid == obj.pwd){
        response.send("Welcome &nbsp;"+obj.userid);
    }
    else{
        response.send("invalide user and password")
    }
});

router.post("/login-json", (require , response) => {
    console.log("post data comes in the body",require.body);
    const obj = require.body;
    if(obj.userid == obj.pwd){
        response.send("Welcome "+obj.userid);
    }
    else{
        response.send("invalide user and password")
    }
});

router.get('/orders/:oid/:name', (require , response) => {
    const oid = require.params["oid"];
    const name = require.params["name"];
    response.send("user id is"+oid+" name is"+name);
    //console.log(require.query);
    //response.send("welcome");
})
module.exports = router;