// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
// }
// function multiply(a,b){
//     console.log(a*b);
// }
// module.exports.adds =add;
// module.exports.subs = sub;
// module.exports.mul = multiply;

//other way 
module.exports={
adder(a,b){
    return(a+b);
},
subt(a,b){
    return(a-b);
}
}