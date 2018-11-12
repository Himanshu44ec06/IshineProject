const jwt  = require('jsonwebtoken');
const  config  = require('../../../config/config').configuration;

module.exports = {

    IssueToken : (input,expire) =>{
            var expireTime  =  expire || 86400;
           return jwt.sign(input, config.token, {
                expiresIn: expireTime
            });
    }
}