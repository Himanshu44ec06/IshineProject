const  express  = require('express'),
cors = require('cors'),
path  = require('path'),
morgan = require('morgan'),
winston  = require('./winston'),
bodyparser  =  require('body-parser');
const app = function () {

  function App () {}

  App.prototype.start = function () {
    var appObject = express();
    appObject.use(bodyparser.json());
    appObject.use(express.json());
    appObject.use(express.urlencoded({extended: true}));

    appObject.options('*', cors());
    appObject.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    return appObject;
  };

  App.prototype.listen = function (appObject, port) {

    appObject.listen(port, function () {
      console.log('Listening to  port ' + port);
    });
    return appObject;

  };
  App.prototype.registerRoutes = function (appObject) {
        // services Route  
        const commonRoute = require('../modules/common/route');
        appObject.use('/api/' + commonRoute.path, commonRoute.protected);
        appObject.use('/api/' + commonRoute.path, commonRoute.unprotected);

        const  vendorRoute = require('../modules/vendor/route');
        appObject.use('/api/' + vendorRoute.path, vendorRoute.protected);
        appObject.use('/api/' + vendorRoute.path, vendorRoute.unprotected);


        const  catalogRoute = require('../modules/catalog/route');
        appObject.use('/api/' + vendorRoute.path, catalogRoute.protected);
        appObject.use('/api/' + vendorRoute.path, catalogRoute.unprotected);
   };

  App.prototype.enableLogger=function(appObject){
    //appObject.use(morgan('combined', { stream: winston.stream }));
   
  }

  App.prototype.OnError  = function(appObject){
    appObject.use(function(err, req, res, next) {
    // winston.Logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }

  let instance;

  return {
    getInstance: function () {
      if (null == instance) {
        instance = new App();
        instance.constructor = null; //  hiding  constructor to prevent instantiation
      }
      return instance;
    }
  };

}();

module.exports = app.getInstance();