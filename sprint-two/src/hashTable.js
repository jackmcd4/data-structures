var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //if in storage i k already exists, we replace v. if k in i does not exist but there's another array in i, add [k, v]
    //put i into storage as the key that references both k and v [k, v]
//if k at i exists and doesn't cancel call .get, change to array with 2 arrays, call .set
    this._storage.set(i, [k, v]);


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // for(var j=0; j<this._storage.length; j++){
  //   if(this._storage[j] === i){
  //     return this._storage[j][1];
  //   }
  // }
  return this._storage.get(i)[1];
  return null;
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
