const  OtpHandler  =  require('../handler/OtpHandler');


module.exports = function(){
 
    GenerateOtp  = (req,res) => {
        OtpHandler.GenerateOtp(res).then((res)=>{}).catch(()=>{});
    },

    MatchOtp  =  (req,res) => {
        OtpHandler.GenerateOtp(res).then((res)=>{}).catch(()=>{});
    }

}