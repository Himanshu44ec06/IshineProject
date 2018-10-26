var  DbModel  = require('../model/OtpSchema');
const  Math = require('../../shared/utility');
var OtpLength = 6;

module.exports = {
 
    GenerateOtp  : function(model){
            var  dbModel  =  new DbModel();
            dbModel.username  = model.username || 'empty';
            dbModel.otp = Math.RandomNumber(OtpLength);

            try {
               return    dbModel.save();
            }catch(ex){
                return null;
            }

    }

}