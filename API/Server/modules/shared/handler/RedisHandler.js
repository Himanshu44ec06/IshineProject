const  redis  =  require('redis');
const  Cache = function(){
function cache(){
    this.client  =  redis.createClient({
        port      : 18808,               
        host      : 'redis-18808.c10.us-east-1-4.ec2.cloud.redislabs.com',
        password  : 'Zo4gXlb7VOQQvUwQOSlqdkgfyIM62ywt',
        
      });
}

cache.prototype.Get  =  function(key){
    return  this.client.get(key,function(err,value){
        if(err)
            return  Promise.reject(err);
        return  Promise.resolve(value);
    });
}

cache.prototype.Set =  function(key,value){
    return  this.client.set(key,value,function(err){
        if(err)
            return  Promise.reject(err);
       // return this.client.Get(key);
        return  Promise.resolve(true);
    });
}

let  instance ;

return {
    getInstance: function () {
      if (null == instance) {
        instance = new cache();
        instance.constructor = null; //  hiding  constructor to prevent instantiation
      }
      return instance;
    }
  };

}();


module.exports  = Cache.getInstance();