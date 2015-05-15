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
    var truthy = false;
    var recurse = function(node){
      if(node.value === target){
        truthy = true;
      }

      for(var i=0; i<node.children.length; i++){
        recurse(node.children[i]);
      }
    };

    recurse(this);
    return truthy;

  };


/*
 * Complexity: What is the time complexity of the above functions?
 */
