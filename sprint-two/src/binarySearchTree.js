
var BinarySearchTree = function(value){
  var obj = {};
  obj.left = undefined;
  obj.right = undefined;
  //obj.storage = [];
  obj.value = value;
  _.extend(obj, bTreeMethods);
  return obj;
}

var bTreeMethods = {};

bTreeMethods.insert = function(value){
  //base case
    //if ? is greater than value && next right is undefined
      //set value right
    //else if (just) greater (i.e. next != undefined)
      //traverse tree and recurse
    //if ? is less than value && next left is undefined
      //set value left
    //else if(just) less than (i.e. next != undefined)
      // traverse tree and recurse
  var recurse = function(node){
    if(value > node.value && node.right === undefined){
        node.right = BinarySearchTree(value);
      } else if(value > node.value){
          recurse(node.right);
      }
       if(value < node.value && node.left === undefined){
        node.left = BinarySearchTree(value);
      } else if(value< node.value) {
          recurse(node.left);
      }
  };

  recurse(this)
};

bTreeMethods.contains = function(value){
  var truthy = false;
  var recurse = function(node){
    if(value === node.value){
      truthy = true;
    }
    if(value > node.value && node.right !== undefined){
        recurse(node.right);
    }
    if(value < node.value && node.left !== undefined){
        recurse(node.left);
    }
  };
  recurse(this);
  return truthy;

};

bTreeMethods.depthFirstLog = function(callback){
  var recurse = function(node){
    callback(node.value);
    if(node.left){
      recurse(node.left);
    } else if(node.right){
      recurse(node.right);
    }
  };

  recurse(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
