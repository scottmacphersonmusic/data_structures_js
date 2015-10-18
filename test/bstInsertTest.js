var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;

describe('BinSearchTree#insert', function() {
  it('should insert a value', function() {
    var bst = new BST(15);
    bst.insert(10);
    expect(bst.left.val).to.equal(10);

    bst.insert(20);
    expect(bst.right.val).to.equal(20);

    bst.insert(7);
    expect(bst.left.left.val).to.equal(7);

    bst.insert(22);
    expect(bst.right.right.val).to.equal(22);
  });

  it('should do nothing if inserted value is already present', function() {
    var bst = new BST(15);
    expect(bst.insert(15)).to.equal(undefined);
    expect(bst.left.val).to.equal(null);
    expect(bst.right.val).to.equal(null);
  });
});
