const  OtpHandler  =  require('../handler/OtpHandler');
const  ResponseHandler = require('../../shared/handler/responseHandler');
const  ErrorHandler =  require('../../shared/handler/errorHandler');

module.exports = function(){
 
    GenerateOtp  = (req,res) => {
        OtpHandler.GenerateOtp(res).then((response)=>{
                ResponseHandler.sendResponse(res,null,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,null,err);
        });
    },

    MatchOtp  =  (req,res) => {
        OtpHandler.GenerateOtp(res).then((response)=>{
            ResponseHandler.sendResponse(res,null,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,null,err);
        });
    }

}