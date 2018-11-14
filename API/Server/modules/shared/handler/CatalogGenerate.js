function Catalog(){
    this.root = null;
    this.searchIndex = [];

    function  Node(data){
        this.data  = data;
        this.id =  gGuid();
        this.parent = null;
        this.path =  null;
        this.children  = [];
        this.searchTag = [];
        //  properties keep on  Adding 
    }

    function  gGuid(){
        function s4(){
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();  
    }


    this.toString  = function(){
             return  JSON.stringify(this.root);
    }

    this.add   =  function(data,toNodeData){
        var  node = new Node(data);
        var  parent = toNodeData ?  this.findBFS(toNodeData) :  null;
        if(parent){
            node.parent =  parent.id;
            node.path =  parent.path ? parent.path + '->' + node.data :  node.data;
            parent.children.push(node);
            this.searchIndex.push(node);
        }else  {
            if(!this.root) {
                node.path  =  node.data;
                this.root =  node;
                this.searchIndex.push(node);
            }
            else  
                throw  "Already have  root";
        }
        return  node;
    }

    this.searchByKeyword  = function(keyword){
        return  this.searchIndex.filter((f)=>{
            var searchItem = f.searchTag.filter((s)=>{
                if(s.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
                    return true

             });
             if(searchItem.length > 0)
                    return true;
        });
    }

    this.findBFS  = function(data){
        var queue =  [this.root];
        while(queue.length){
              var  thisNode  =  queue.shift();
              if(thisNode.id ==  data)
                    return  thisNode;
                for(var  i =0;  i  < thisNode.children.length; i++){
                    queue.push(thisNode.children[i]);
                }
        }
        return null;
    }

    this.addDataToNode  = function(node,data){
        var queue =  [this.root];
        var  isFound = false;
        while(queue.length){
              var  thisNode  =  queue.shift();
              if(thisNode.id ==  data){
                  isFound  = true;
                  thisNode.data  =  data;

                  this.searchIndex.map((f)=>{
                      if(f.id == thisNode.id)
                            f =  thisNode;
                  });
              }

              if(isFound)
                return  isFound;
             
                for(var  i =0;  i  < thisNode.children.length; i++){
                    queue.push(thisNode.children[i]);
                }
        }
        return  isFound;
    }


}


module.exports  = {
    Catalog
}