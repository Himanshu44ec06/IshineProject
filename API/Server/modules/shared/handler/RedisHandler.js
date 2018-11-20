const  redis  =  require('redis');
const  Cache = function(){
function Redis(){
    this.client  =  redis.createClient({
        port      : 18808,               
        host      : 'redis-18808.c10.us-east-1-4.ec2.cloud.redislabs.com',
        password  : 'Zo4gXlb7VOQQvUwQOSlqdkgfyIM62ywt',
        
      });

}

Redis.prototype.Get  =  function(key){
    return  this.client.get(key);
}

Redis.prototype.Set =  function(key,value){
    return  this.client.set(key,value);
}

let  instance ;



return {
    getInstance: function () {
      if (null == instance) {
        instance = new Redis();
        instance.constructor = null; //  hiding  constructor to prevent instantiation
      }
      return instance;
    }
  };

}();


module.exports  = Cache.getInstance();