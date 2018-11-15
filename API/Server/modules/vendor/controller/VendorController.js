const  VendorHandler  =  require('../handler/VendorHandler');
const  ResponseHandler = require('../../shared/handler/responseHandler');
const  Jwt =  require('../../shared/handler/JWTHandler');
const  ErrorHandler =  require('../../shared/handler/errorHandler');

module.exports = {  
 

    CheckForExisted  : (req,res)=>{

        VendorHandler.CheckForExisted(req.body).then((response)=>{
            if(response.length > 0)
                ResponseHandler.sendResponse(res,200,{"Result" : true});
            else 
            ResponseHandler.sendResponse(res,200,{"Result" : false});
        })
    },

    Register  : (req,res) =>{
            VendorHandler.CheckForExisted(req.body).then((response)=>{
                if(response.length > 0)
                  ResponseHandler.sendResponse(res,200,{errorCode :  '101'});
                else {
                VendorHandler.RegisterNew(req.body).then((responseFromRegister)=>{
                    ResponseHandler.sendResponse(res,201,responseFromRegister)
                }).catch((err)=>{
                    ErrorHandler.sendResponse(res,null,err);
                });
            }
            }).catch((err)=>{
                ErrorHandler.sendResponse(res,null,err);
            })
    },

    Login : (req,res) =>{
            VendorHandler.VendorLogin(req.body).then((response)=>{
                    if(response.length < 1)
                        ErrorHandler.sendResponse(res,200,{errorCode :  '102'});
                    
                    var vendor = response[0];
                    
                    VendorHandler.AddDevice(vendor,req.DeviceId || '').then((addDeviceResponse)=>{
                        
                        var token = Jwt.IssueToken({
                            Id  :  vendor.id,
                            CreatedTime :  Date.now()
                        },8640000);
                        ResponseHandler.sendResponse(res,200,{ auth: true, token: token })
                           
                    }).catch((err)=>{
                        ErrorHandler.sendResponse(res,null,err);
                    });

            }).catch((err)=>{
                ErrorHandler.sendResponse(res,null,err);
            })
    }
    
}