const  Jwt =  require('../../shared/handler/JWTHandler');
const  Guard  =  require('../../shared/handler/GuardHandler');
module.exports =  {
    
    Guard   :  (req,res,next)=>{
            Guard.Guard(req,res,next);
    }

}