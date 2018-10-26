const  mongoose =require('mongoose');


const  schema  = mongoose.Schema({

    username :  {
        type: String,
        require :  true,
        trim  : true
    },

    otp : {
        type : Number,
        require : true,
        trim : true
    },

    IsActive  : {
        type : Boolean,
        default  : false
    },


    CDate : {
        type :  Date,
        default  : () => Date.now() + 2*60*60*1000
    }




});

const model  = mongoose.model('otpModel',schema);
module.exports =model;