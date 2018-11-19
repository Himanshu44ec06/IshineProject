const express  = require('express'),
  SharedEnums = require('../shared/sharedEnums'),
  ProtectedRoute =  express.Router(),
  Route = express.Router(),
  controller =  require('./controller/VendorController');

  
  Route.route('/Register').post(controller.Register);
  Route.route('/Login').post(controller.Login);
  Route.route('/CheckForExisted').post(controller.CheckForExisted);
 Route.route('/GetVendorByLocationService/:location/:service').get(controller.GetVendorByLocationService);

  module.exports = {
    protected: ProtectedRoute,
    unprotected: Route,
    path : SharedEnums.moduleRoute.Vendor,
    guard:{}
  };