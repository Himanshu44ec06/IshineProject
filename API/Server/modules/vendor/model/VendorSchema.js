const  mongoose =require('mongoose');

const  schema  =  mongoose.Schema({
 
    Phone : {
        type : Number,
        require : true,
        unique : true,
        trim : true
    },

    Location : {
        type : Object
    },

    Services  : {
       type : Object
    },

    Devices  : {
        type :  Object
    },

    Password : {
        type: String, 
        require : true,
        trim : true
    },

    Status : {
        type :  Number 
    }

});


const model  = mongoose.model('VendorModel',schema);
module.exports =model;