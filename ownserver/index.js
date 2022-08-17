//const fs = require('fs');
const http = require('http');
function requireResponse(require , response){
    console.log("response is", require.url);
    response.writeHead(200,{"content-Type":"text/html"});
    response.write("<h1>hellow mritunjay</h1>");
    response.end();
}
const server = http.createServer(requireResponse);
server.listen(7000, (err)=>{
    if(err){
        console.log("error due to server write ", err);
    }else{
        console.log("server is started successfully",server.address().port);
    }
})