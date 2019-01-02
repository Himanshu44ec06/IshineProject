const  Handler  =  require('../handler/CatalogHandler');
const  Cache  =  require('../../shared/handler/RedisHandler');
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

        Cache.Set("a","a").then((r)=>{
            console.log(r);
            Cache.Get("a").then((re)=>{console.log(re)}).catch((err)=>{ console.log(err)});
           /* Handler.GetByID( req.params.Id).then((response)=>{
                ResponseHandler.sendResponse(res,200,response)
            }).catch((err)=>{
                ErrorHandler.sendResponse(res,400,err);
            });*/

        }).catch((err)=>{ console.log(err)});

        
    },


    GetAll : (req,res) =>{
        Handler.GetAll(req.query.Id).then((response)=>{
            var result  = [];
            response.map((catalog)=>{
                result.push({
                    Id :  catalog._id,
                    CatalogName  : catalog.CatalogName,
                    CatalogIcon  : catalog.CatalogIcon
                });  
            })
            ResponseHandler.sendResponse(res,200,result);
        }).catch((err)=>{
            ErrorHandler.sendResponse(res,400,err);
        });
    }

}