var  DbModel  = require('../model/VendorSchema');


module.exports  = {

    RegisterNew  : function(model){
        var  dbModel  =  new DbModel();
        dbModel.Phone  = model.Phone || 'empty';
        dbModel.Location = model.Location  || [];
        dbModel.Services  = model.Services  || [];
        dbModel.Devices  = model.Devices  || [];
        dbModel.Password  =  model.Password || '';
        dbModel.Status = 1;
        return    dbModel.save();    
    },

    CheckForExisted :  function(model){
        return DbModel.find({Phone :  model.Phone });
    },

    VendorLogin :  function(model){
        return DbModel.find({ Phone : model.Phone ,  Password :  model.Password , Status : 1 });
    },

    AddDevice  : function(dbModel,deviceId){
        if(dbModel.Devices.filter((f)=>{ return f == deviceId}).length < 1)
                dbModel.Devices.push(deviceId);
        
        return dbModel.save();
    },

    GetVendorByService  : function(location,service){
        return  DbModel.find({ Services  :  service , Location :  location,Status: { $gt: 0, $lt: 100 } });
    }


}