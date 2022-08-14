// Aysnc way
const fs= require("fs");
const Path = "E:\\nodepractic\\class 1\\one.js";
console.log("async way");
try {
    const result = fs.readFileSync(Path);
    console.log("result is " +result);//result.toString());
}catch(error){
    console.log("error is due to file reading",error);
}