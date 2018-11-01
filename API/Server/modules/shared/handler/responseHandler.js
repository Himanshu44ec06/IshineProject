class ResponseHandler {
    static  sendResponse(res,status,response){
         res.status(status || 200).send({ body : response});
     }
 }
 
 module.exports  = ResponseHandler;