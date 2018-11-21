const Nexmo = require('nexmo');
const config   = require('../../../config/config').configuration;


let nexmo;

module.exports   = {
 
    sendSms : function(from,to,text){
           if(!nexmo)
            nexmo = new Nexmo({
                apiKey: config.Nexom.Key,
                apiSecret: config.Nexom.Screct
            });
            nexmo.message.sendSms(from, to, text);

    }

}
