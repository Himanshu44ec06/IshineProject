const assert = require('assert');
const  logger  = require('../../Server/init/winston').Logger;


describe('Logger Test',()=>{

  it('Logging Some Message', ()=>{
 
    logger().log('error', 'Hello distributed log files!');
        assert(true);


  });


});