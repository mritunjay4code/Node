const bcrypt = require('bcrypt');
module.exports = {
    SALT : 10,
    hashPassword(planPassword){
        return bcrypt.hashSync(planPassword, this.SALT);
    },
    comparHash(planPassword, dbPassword){
        return bcrypt.compareSync(planPassword, dbPassword);
    }
}