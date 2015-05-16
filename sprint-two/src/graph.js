

var Graph = function(){
  this.Nodes =[];
  this.edges =[];
};

Graph.prototype.addNode = function(node){
  this.Nodes.push(node);
};

Graph.prototype.contains = function(node){
  var truthy = false;

  for(var i=0; i<this.Nodes.length; i++){
    if(this.Nodes[i]===node){
      truthy=true;
    }
  }

  return truthy;
};

Graph.prototype.removeNode = function(node){

for(var i=0; i<this.Nodes.length; i++){
  if(this.Nodes[i]===node){
    //delete this.Nodes[i];
    this.Nodes.splice(i, 1);
  }
}

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var truthy=false;

  for(var i=0; i<this.edges.length; i++){
    if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode || this.edges[i][0] === toNode && this.edges[i][1] === fromNode){
      truthy = true;
    }
  }
  return truthy;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode,toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i=0; i<this.edges.length; i++){
    if(this.edges[i][0] === fromNode && this.edges[i][1] === toNode || this.edges[i][0] === toNode && this.edges[i][1] === fromNode){
      //delete this.edges[i];
      this.edges.splice(i, 1);
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  for(var i=0; i<this.Nodes.length; i++){
   cb(this.Nodes[i]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



