const  mongoose =require('mongoose');

const  schema  =  mongoose.Schema({

    CatalogName  :  {
        type : String, 
        require : true,
        unique : true,
        trim : true
    },

    CatalogObject :  {
        type :  Object,
        require : true,
        trim : true
    } ,

    Status : {
        type :  Number,
        require : true
    }


});

const model  = mongoose.model('CatalogModel',schema);
module.exports =model;