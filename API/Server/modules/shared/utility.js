module.exports =  {
    RandomNumber : function(length){
        var  _length =  6;  
        var randomNumber  = Math.random();
        for(var count = 0; count < _length; count++){
           randomNumber = randomNumber  * 10;
        }
        return  Math.floor(randomNumber);
   },

   RandomString : function (){
       return  Math.random().toString(36).substring(2);
   }

}