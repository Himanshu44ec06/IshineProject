const express  = require('express'),
SharedEnums = require('../shared/sharedEnums'),
  ProtectedRoute =  express.Router(),
  Route = express.Router(),
  controller =  require('./controller/otpController');

  
  Route.route('/GenrateOtp').post(controller.GenerateOtp);
  Route.route('/MatchOtp').post(controller.MatchOtp);

  module.exports = {
    protected: ProtectedRoute,
    unprotected: Route,
    path : SharedEnums.moduleRoute.Common,
    guard:{}
  };