const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const userSchema = new Schema({
    'email':{type:SchemaTypes.String, required: true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
    'name':{type:SchemaTypes.String}
});
const UserModel = connection.model('users',userSchema);
module.exports = UserModel;