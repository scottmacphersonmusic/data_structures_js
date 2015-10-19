var NullBinTree = require('./nullBinTree');

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

BinSearchTree.prototype.depth = function() {
  if (!this.val) {
    return 0;
  }
  var left_depth = this.left.depth();
  var right_depth = this.right.depth();
  return 1 + (left_depth > right_depth ? left_depth : right_depth);
};

BinSearchTree.prototype.balance = function() {
  if (!this.val) {
    return 0;
  }
  var balance = 0;
  if (this.left.val) {
    balance += this.left.balance() + 1;
  }
  if (this.right.val) {
    balance += this.right.balance() - 1;
  }
  return balance;
};

BinSearchTree.prototype.preOrder = function() {
  var result = [this.val];
  this.left.preOrder().forEach(function(num) {
    result.push(num);
  });
  this.right.preOrder().forEach(function(num) {
    result.push(num);
  });
  return result;
};

BinSearchTree.prototype.inOrder = function() {
  var result = [];
  this.left.inOrder().forEach(function(num) {
    result.push(num);
  });
  result.push(this.val);
  this.right.inOrder().forEach(function(num) {
    result.push(num);
  });
  return result;
};

BinSearchTree.prototype.postOrder = function() {
  var result = [];
  this.left.postOrder().forEach(function(num) {
    result.push(num);
  });
  this.right.postOrder().forEach(function(num) {
    result.push(num);
  });
  result.push(this.val);
  return result;
};

BinSearchTree.prototype.breadthFirst = function() {
  var result = [];
  var q = [this];

  while (q.length > 0) {
    current = q.shift();
    result.push(current.val);
    if (current.left.val) {
      q.push(current.left);
    }
    if (current.right.val) {
      q.push(current.right);
    }
  }
  return result;
};

module.exports = BinSearchTree;
