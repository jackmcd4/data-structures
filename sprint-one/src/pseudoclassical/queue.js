var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizes = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  if(this.sizes<0){
    return 0;
  }
return this.sizes;
};
Queue.prototype.enqueue = function(value){
this.storage[this.sizes]=value;
this.sizes++;
};
Queue.prototype.dequeue = function(){
  var result = this.storage[0];
  if(this.sizes>0){
    for(var i=0; i<this.sizes; i++){
      this.storage[i]=this.storage[i+1];
    }
  }
  delete this.storage[this.sizes];
  this.sizes--;
  return result;
}

