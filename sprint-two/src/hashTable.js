var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //if storage at i is undefined
    // set that
  //else
    //for loop
      // if storage at i[j][0] === k
        // replace
  //else

    //get current array at storage[i], create new array and for loop through storage[i] pushing 2ples
      //add new value to new array
      // storage[i].set new array with ALL 2ples

  var i = getIndexBelowMaxForKey(k, this._limit);
  var truthy = false;
  if(this._storage.get(i) === undefined){
    this._storage.set(i, [k, v]);
    truthy = true;
  } else {
    for (var j=0; j<this._storage.get(i).length; j++){
      if(this._storage.get(i)[j][0] === k){
        this._storage.set(i[j],[k,v]);
        truthy = true;
      }
    }
  }
  if(truthy === false){
    var myArr = [];
    for(var j=0; j<this._storage.get(i).length; j++){
      myArr.push(this._storage.get(i));
    }
    myArr.push([k,v]);
    this._storage.set(i,myArr);
  }



};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i)===null){
    return null;
  }
  if(typeof this._storage.get(i)[0] === 'string'){
    return this._storage.get(i)[1];
  } else{
    for (var j=0; j<this._storage.get(i).length; j++){
      if(this._storage.get(i)[j][0] === k){
        return this._storage.get(i)[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)[0] === k){
    this._storage.set(i, null);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
