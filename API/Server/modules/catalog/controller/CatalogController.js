const  Handler  =  require('../handler/CatalogHandler');
const  ResponseHandler = require('../../shared/handler/responseHandler');
const  ErrorHandler =  require('../../shared/handler/errorHandler');


module.exports = {

    Add : (req,res) =>{
        Handler.Add(req.body).then((response)=>{
            ResponseHandler.sendResponse(res,201,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,400,err);
        });
    },

    GetByID :  (req,res) =>{
        Handler.GetByID( req.params.Id).then((response)=>{
            ResponseHandler.sendResponse(res,200,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,400,err);
        });
    },


    GetAll : (req,res) =>{
        Handler.GetAll(req.query.Id).then((response)=>{
            ResponseHandler.sendResponse(res,200,response)
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,400,err);
        });
    }

}