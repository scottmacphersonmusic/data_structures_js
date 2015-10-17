var LinkedList = require('../lib/linkedList').list;
var expect = require('chai').expect;

describe('LinkedList#remove', function() {
  // beforeEach();  <-- figure this out

  it('should remove a node and return its value', function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.remove(4)).to.equal(4);
    expect(list.head.next.val).to.equal(3);
    expect(list.head.next.prev.val).to.equal(5);
  });

  it('should remove the head node', function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.remove(5)).to.equal(5);
    expect(list.head.val).to.equal(4);
  });

  it('should remove the tail node', function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.remove(1)).to.equal(1);
    expect(list.tail.val).to.equal(2);
  });

  it("should remove the node if there's only one", function() {
    var list = new LinkedList();
    list.insert(1);
    expect(list.remove(1)).to.equal(1);
    expect(list.head).to.equal(null);
  });

  it("should remove the tail node if there are only two", function() {
    var list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.remove(1)).to.equal(1);
    expect(list.tail).to.equal(null);
    expect(list.head.val).to.equal(2);
    expect(list.head.next).to.equal(null);
  });

  it("should return nil if val isn't present", function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.remove(6)).to.equal(null);
  });
});
