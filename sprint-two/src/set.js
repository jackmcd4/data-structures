var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
    this._storage.push(item);
  //in the instructions says set should only have unique values...
  //how do you call another prototype (i.e., .contains) in this prototype?
  //can you?
};

setPrototype.contains = function(item){
  var truthy = false;
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      truthy = true;
    }
  }
  return truthy;
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
