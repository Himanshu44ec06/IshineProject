const assert  = require('assert');
const  handler = require('../../../Server/modules/common/handler/OtpHandler');


describe("Otp Handler", ()=>{
 

    it("Generate Otp",(done)=>{
        
          var  model  = {
              username : 'hparkash'
          };

         var  response =   handler.GenerateOtp(model);
         console.log(response);

         assert(true);
         done();

    });

});