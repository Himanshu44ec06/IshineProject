const  Jwt =  require('../../shared/handler/JWTHandler');

module.exports =  {
    
    Guard   : (req,res,next) =>{

            var  AuthHeader =  req.header("Authorization");
            console.log(AuthHeader);
            next();            

    }

}