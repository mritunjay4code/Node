//difference betbeen export vs modue.export


// console.log("Export is ", exports , typeof exports);
// console.log(exports===module.exports,"hii");

// exports ={
//     add(){
//         console.log("i am add");
//     },
//     sub(){
//         console.log("i am sub");
//     }
// }
// console.log(exports===module.exports);
// console.log("export is ", exports);

console.log("Export is ", exports , typeof exports);
console.log(exports===module.exports,"hii");

exports.add=()=>{
    console.log("i am add");
    }
    exports.show=()=>{
        console.log("i am show");
    }
console.log(exports===module.exports);
console.log("export is ", exports);
