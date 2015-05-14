var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.beforeHead=false;

  list.addToTail = function(value){
    if(list.tail===null){
      list.head=Node(value);
      list.tail=list.head;
    } else if(!list.beforeHead){
      list.beforeHead = Node(value);
      list.tail = list.beforeHead;
    }else {
      list.tail=Node(value);
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.beforeHead;
    return result;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key].value===target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
