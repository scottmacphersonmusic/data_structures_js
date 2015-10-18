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

NullBinTree.prototype.depth = function() {
  return 0;
};

NullBinTree.prototype.balance = function() {
  return 0;
};

NullBinTree.prototype.preOrder = function() {
  return [];
};

module.exports = NullBinTree;
