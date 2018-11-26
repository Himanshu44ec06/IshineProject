module.exports =  {
    RandomNumber : function(length){
       return  Math.random().toString().substring(3,9);
   },

   RandomString : function (){
       return  Math.random().toString(36).substring(2);
   }

}