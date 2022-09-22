const { update } = require("../db/Repository/user_operation");
const user_operations = require("../db/Repository/user_operation");

module.exports = {
    login(request, response){
        const userObject = request.body;
        user_operations.find(userObject, response);
    },

    async register(request, response) {
            const userObject = request.body; // JSON Data 
            console.log(userObject);
            const result = await user_operations.add(userObject);
            console.log(result._id);
            
            if(result._id){
                response.status(200).json({message:'Register SuccessFully'});
            }
            else{
                response.status(500).json({message:'Problem in User Register'});
            }
    },
    update(request, response) {
        const userObject = request.body;
        let result =  user_operations.update(userObject, response);
        console.log('Update success...');
        
    },
    remove(request, response) {
        const userObject = request.body;
        let result = user_operations.remove(userObject, response);
    }
}