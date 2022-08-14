//sync way
const fs =require("fs");
console.log("hellow nodejs");
const Path =__dirname+"/two.js";
console.log(Path);
fs.readFile(Path,(error, buffer)=>{
    if(error){
        console.log("error due to read file",error);
    }
    else{
        console.log("date is buffer",buffer.toString());
    }
})
console.log("hi nodejs");