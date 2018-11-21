const  assert  = require("assert");
const handler = require('../../../Server/modules/shared/handler/SmsHandler');


describe(" SMS Handler ",()=>{
 

    it("Send SMS",(done)=>{
 


        handler.sendSms("NEXO",918447731156,"I am text");
        done();

    })

});





