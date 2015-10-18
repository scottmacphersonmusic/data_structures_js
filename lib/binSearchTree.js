var NullBinTree = function() {
  this.val = null;
  this.left = null;
  this.right = null;
};

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

module.exports = BinSearchTree;
