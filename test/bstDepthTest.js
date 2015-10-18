var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;

describe('BinSearchTree#depth', function() {
  it('should return 0 if the tree is empty', function() {
    var bst = new BST();
    expect(bst.depth()).to.equal(0);
  });

  it('should return greatest depth of tree', function() {
    var bst = new BST(15);
    var input = [10, 7, 2, 9, 8, 13, 20, 18, 22, 30, 27]
    input.forEach(function(n) {
      bst.insert(n);
    });
    expect(bst.depth()).to.equal(5);
  });
});
