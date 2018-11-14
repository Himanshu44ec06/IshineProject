const express  = require('express'),
  SharedEnums = require('../shared/sharedEnums'),
  ProtectedRoute =  express.Router(),
  Route = express.Router(),
  Guard  =  require('./handler/GuardHandler'),
  controller =  require('./controller/CatalogController');


  
  ProtectedRoute.route('/Add').post(controller.Add);
  Route.route('/GetAll').get(controller.GetAll);
  Route.route('/GetByID/:Id').get(controller.GetByID);

  module.exports = {
    protected: ProtectedRoute,
    unprotected: Route,
    path : SharedEnums.moduleRoute.Catalog,
    guard: Guard.Guard,
  };