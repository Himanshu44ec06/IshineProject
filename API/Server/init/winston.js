module.exports = {

    Logger: function() {
  
        const appRoot = require('app-root-path');
        var winston  = require('winston');
        const { combine, timestamp, label, printf } = winston.format;
  
        const myFormat = printf(info => {
            return `[${info.timestamp || null}][${info.label || null}][${info.level|| null}][${info.guid || null}][${info.message || null}]`;
          });

        // define the custom settings for each transport (file, console)
        var options = {
            file: {
                level: 'info',
                filename: `${appRoot}/Server/logs/app.log`,
                handleExceptions: true,
               // json: true,
               // maxsize: 5242880, // 5MB
               // maxFiles: 5,
                colorize: false,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true,
            },
        };
  
        // instantiate a new Winston Logger with the settings defined above
        var logger = winston.createLogger({
            level: 'info',
            format: combine(
                label({ label: 'API SERVER' }),
                timestamp(),
                myFormat
              ),
            transports: [
                //new winston.transports.File(options.file),
                new (require('winston-daily-rotate-file'))(options.file),
                new winston.transports.Console(options.console)
            ],
            exitOnError: false, // do not exit on handled exceptions
        });
  
        // create a stream object with a 'write' function that will be used by `morgan`
        logger.stream = {
            write: function(message, encoding) {
                // use the 'info' log level so the output will be picked up by both transports (file and console)
                logger.info(message);
            },
        };
        return logger;
  
    }
  
  }