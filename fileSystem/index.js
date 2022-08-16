const fs = require("fs");
const FILEPATH = __dirname+"/first.txt";
fs.appendFile(FILEPATH, "hellow i am appendFile",err=>{
// fs.writeFile(FILEPATH, "hellow i am write file",err=>{
    if(err){
        console.log("Error writing file",err);
    }else{
        console.log("file write sussfull");
    }
})