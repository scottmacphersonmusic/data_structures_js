var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;

describe('BinSearchTree#balance', function() {
  it('should return 0 if the tree is empty', function() {
    var bst = new BST();
    expect(bst.balance()).to.equal(0);
  });

  it('should return 1 if left is present but right is not', function() {
    var bst = new BST(5, new BST(3));
    expect(bst.balance()).to.equal(1);
  });

  it('should return -1 if right is present but left is not', function() {
    var bst = new BST(5, null, new BST(7));
    expect(bst.balance()).to.equal(-1);
  });

  it('should return accumulated balance for all nodes', function() {
    var bst = new BST(15);
    [10, 7, 5, 13, 11, 20, 18].forEach(function(num) {
      bst.insert(num);
    });
    expect(bst.balance()).to.equal(3);
  });
});
