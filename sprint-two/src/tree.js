var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.count = 0;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
  this.count++;
};

treeMethods.contains = function(target){
  //does tree object.value === target?
    //return true
var recurse = function(node){//doesn't work because of scope...
    for(var i = 0; i<node.length; i++){
      if(node[i].value===target){
        return true;
      } else if(node[i].children.length!==0){
        recurse(node[i].children);
    }
  }
return false;
}

return recurse(this.children);


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
