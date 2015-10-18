var BST = require('../lib/binSearchTree');
var expect = require('chai').expect;
var should = require('chai').should;

describe('BinSearchTree', function() {
  beforeEach(function() {
    bst = new BST(15);
    var input = [10, 7, 5, 9, 13, 11, 14, 20, 18, 19, 24]
    input.forEach(function(num) {
      bst.insert(num);
    });
  });

  it('should have pre-order traversal', function() {
    var result = [15, 10, 7, 5, 9, 13, 11, 14, 20, 18, 19, 24];
    expect(bst.preOrder()).to.eql(result);
  });

  it('should have in-order traversal', function() {
    var result = [5, 7, 9, 10, 11, 13, 14, 15, 18, 19, 20, 24];
    expect(bst.inOrder()).to.eql(result);
  });

  it('should have post-order traversal', function() {
    // console.log(bst.left.left);
    var result = [5, 9, 7, 11, 14, 13, 10, 19, 18, 24, 20, 15];
    expect(bst.postOrder()).to.eql(result);
  });

  it('should have breadth-first traversal', function() {
    var result = [15, 10, 20, 7, 13, 18, 24, 5, 9, 11, 14, 19];
    expect(bst.breadthFirst()).to.eql(result);
  });
});
