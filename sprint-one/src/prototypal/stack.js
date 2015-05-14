var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var instantiate = Object.create(stackMethods);
 instantiate.sizes = 0;
 instantiate.storage = {};
 return instantiate;
};


var stackMethods ={
  pop : function(){
    this.sizes--;
    var result = this.storage[this.sizes];
    delete this.storage[this.sizes];
    return result;
  },
  push : function(value){
    this.storage[this.sizes]=value;
    this.sizes++;},
  size : function(){
  if(this.sizes<0){
    return 0;
  }
    return this.sizes;}
};









//
//Stack.stackMethods

//Stack.stackMethods.push
//....pop
//....size
