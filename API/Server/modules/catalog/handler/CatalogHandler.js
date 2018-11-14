var  DbModel  = require('../model/CatalogSchema');


module.exports  = {

     Add : (model) =>{
        var dbModel  = new DbModel();
        dbModel.CatalogName = model.CatalogName;
        dbModel.CatalogObject  = model.CatalogObject;
        dbModel.Status  = 1;
        return  dbModel.save();
     },

     GetByID  : (Id) =>{
        return dbModel.findById(Id)
     },

     GetAll : () =>{
        return  dbModel.find({Status: 1})
     },

     Update : (model) =>{
        return  model.save();
     }

}