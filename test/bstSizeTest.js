var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;

describe('BinSearchTree#size', function() {
  it('should return the number of values in the tree', function() {
    var bst = new BST(15);
    [10, 20, 7, 22].forEach(function(num) {
      bst.insert(num);
    });
    expect(bst.size()).to.equal(5);
  });

  it('should return 0 if the tree is empty', function() {
    var bst = new BST();
    expect(bst.size()).to.equal(0);
  });
});
