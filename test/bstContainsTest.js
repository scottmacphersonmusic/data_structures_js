var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;

describe('BinSearchTree#contains', function() {
  it('should return true if value is present', function() {
    var bst = new BST(15);
    [10, 20, 7, 22].forEach(function(num) {
      bst.insert(num);
    });
    expect(bst.contains(22)).to.equal(true);
  });

  it('should return false if value isn\'t present', function() {
    var bst = new BST(15);
    [10, 20, 7, 22].forEach(function(num) {
      bst.insert(num);
    });
    expect(bst.contains(17)).to.equal(false);
  });
});
