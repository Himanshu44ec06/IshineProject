const assert = require('assert');
const  Cache  =  require('../../../Server/modules/shared/handler/RedisHandler');



describe("Cache Testing",()=>{

    xit("Setting Value",(done)=>{

        
        Cache.Set('Key','KEY');
        console.log(Cache.Get('Key'));
        done();
    });

});