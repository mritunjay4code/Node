const UserModel = require('../models/schema');
const encrypt = require("../../utils/encrypt");
module.exports = {
    add(userObject){
        userObject.password = encrypt.hashPassword(userObject.password);
        return UserModel.create(userObject);
    },
    find(userObject, response){
        UserModel.findOne({"email": userObject.email},(err, doc)=>{
            if(err){
                response.status(500).json({message: "error during login page"+err});
            }
            else if(doc && doc.email){
                let dbPassword = doc.password;
                let plainPassword = userObject.password;
                if(encrypt.comparHash(plainPassword,dbPassword));
                response.status(200).json({message:"welcome"+doc.name});
            }
            else{
                response.status(404).json({message:"invalide user id and password"});
            }
            response.status(404).json({message:"invalide user id and password"});
        });
    },
    update(userObject, response){
        UserModel.findOneAndUpdate({"email":userObject.email},{"password":userObject.password},(err, doc)=>{
            if(err){
                console.log(err);
                response.status(404).json({message:"Unable to update password"});
            }else{
                response.status(200).json({message:"password update successfully"});
            }
            
        });
    },
    remove(userObject, response){
        UserModel.findOneAndRemove({"email": userObject.email}, (err,doc)=>{
            if(err){
                console.log(err);
                response.status(404).json({message:"Unable to remove"});
            }else{
                response.status(200).json({message:"remove  successfully"});
            }
        });
    }
}