const assert = require('assert');
const  Cache  =  require('../../../Server/modules/shared/handler/RedisHandler');



describe("Cache Testing",()=>{

    it("Setting Value",(done)=>{

        Cache.Set('KEy','KEY').then((r)=>{assert(true)}).catch((e)=>{ console.log(e); assert(false) });
    });

});