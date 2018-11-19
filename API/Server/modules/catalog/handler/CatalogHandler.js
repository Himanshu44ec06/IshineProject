var  DbModel  = require('../model/CatalogSchema');


module.exports  = {

     Add : (model) =>{
        var dbModel  = new DbModel();
        dbModel.CatalogName = model.CatalogName;
        dbModel.CatalogObject  = model.CatalogObject;
        dbModel.CatalogIcon =  model.CatalogIcon  || "https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/no.png";
        dbModel.Status  = 1;
        return  dbModel.save();
     },

     GetByID  : (Id) =>{
        return DbModel.findById(Id)
     },

     GetAll : () =>{
        return  DbModel.find({Status: 1})
     },

     Update : (model) =>{
        return  model.save();
     }

}