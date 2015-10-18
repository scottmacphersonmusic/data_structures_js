// Null Binary Tree

var NullBinTree = function() {
  this.val = null;
  this.left = null;
  this.right = null;
};

NullBinTree.prototype.contains = function() {
  return false
};

NullBinTree.prototype.size = function() {
  return 0;
};

// Binary Search Tree

var BinSearchTree = function(val, left, right) {
  this.val = val;
  this.left = left || new NullBinTree;
  this.right = right || new NullBinTree;
};

BinSearchTree.prototype.insert = function(val) {
  if (val < this.val) {
    if (this.left.val) {
      this.left.insert(val);
    } else {
      this.left = new BinSearchTree(val);
    }
  } else if (val > this.val) {
    if (this.right.val) {
      this.right.insert(val);
    } else {
      this.right = new BinSearchTree(val);
    }
  }
};

BinSearchTree.prototype.contains = function(val) {
  if (val == this.val) {
    return true;
  } else if (val < this.val && this.left.contains(val)) {
    return true;
  } else if (val > this.val && this.right.contains(val)) {
    return true;
  }
  return false;
};

BinSearchTree.prototype.size = function() {
  var count = 0;
  if (this.val) {
    count ++;
  }
  count += this.left.size();
  count += this.right.size();
  return count;
};

module.exports = BinSearchTree;
