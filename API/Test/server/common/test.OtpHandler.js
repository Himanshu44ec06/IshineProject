const assert = require('assert');
const handler = require('../../../Server/modules/common/handler/OtpHandler');


describe("Otp Handler", () => {
    xit("Fetch Otp",(done)=>{

        var model = {
            username : "hparkash"
        }

        handler.GenerateOtp(model).then((output)=>{
            var  otpModel = {
                username :  model.username,
                otp : output.otp
            }
            return handler.MatchOtp(otpModel);
        }).then((response)=>{
            if(response.length > 0 &&  response[0].CDate > Date.now())
                assert(true);
            else 
                assert(false);
            
                done();
        }).catch((err)=>{
            assert(false);
            done();
        })
        
    })

    xit("Generate Otp", (done) => {

        var model = {
            username: 'hparkash'
        };

        handler.GenerateOtp(model).then((response) => {
            assert(true);
            done();
        }).catch((err) => {
            console.log(err);
            assert(false);
            done();
     });

    });

});