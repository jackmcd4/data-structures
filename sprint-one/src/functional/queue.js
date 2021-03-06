var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var deleted;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size]=value;
    size++;
  };

  someInstance.dequeue = function(){
     var result= storage[0];
     if(size>0){
      for(var i=0; i<size; i++){
        storage[i]=storage[i+1];
      }
      delete storage[size];
        size--;
     }
     return result;
    };

  someInstance.size = function(){
    if(size<0){
      return 0;
    }
    return size;
  };

  return someInstance;
};

//arr1=[0, 1, 2]
//arr2=['a', 'b', 'c']
