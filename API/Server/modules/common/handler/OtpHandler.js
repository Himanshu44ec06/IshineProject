var  DbModel  = require('../model/OtpSchema');
const  Math = require('../../shared/utility');
var OtpLength = 6;

module.exports = {
 
    GenerateOtp  : function(model){
            var  dbModel  =  new DbModel();
            dbModel.username  = model.username || 'empty';
            dbModel.otp = Math.RandomNumber(OtpLength);
            dbModel.IsActive = true;
            return    dbModel.save();    
    },

    DisableOtp  : function(model){
        var  conditions =  { username : model.username || 'empty'},
        update =   { IsActive :  false},
        options  = { multi :  true};
        return  DbModel.update(conditions,update,options);

    },

    MatchOtp  : function(model){
        return DbModel.find({username :  model.username || '', otp  : model.otp || 0, IsActive : true });
    }

}