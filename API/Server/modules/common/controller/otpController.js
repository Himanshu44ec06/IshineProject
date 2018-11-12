const  OtpHandler  =  require('../handler/OtpHandler');
const  ResponseHandler = require('../../shared/handler/responseHandler');
const  ErrorHandler =  require('../../shared/handler/errorHandler');

module.exports = {
 
    GenerateOtp  : (req,res) => {

       OtpHandler.DisableOtp(req.body).then(()=>{
          return  OtpHandler.GenerateOtp(req.body);   
       }) 
        .then((response)=>{
                ResponseHandler.sendResponse(res,null,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,null,err);
        });
    },

    MatchOtp  :  (req,res) => {
        OtpHandler.MatchOtp(req.body).then((response)=>{
            var auth = false;
            if(response.length > 0)
                auth = true;
            
            if(auth)
                 return OtpHandler.DisableOtp(req.body);
            else 
                 ResponseHandler.sendResponse(res,null,{auth :  auth});
            
        }).then((response)=>{
            ResponseHandler.sendResponse(res,null,{auth :  true});
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,null,err);
        });
    }

}