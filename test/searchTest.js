var LinkedList = require('../lib/linkedList').list;
var expect = require('chai').expect;

describe('LinkedList#search', function() {
  it('should return a node containing a given value', function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    var result = list.search(3);
    expect(result.val).to.equal(3);
    expect(result.prev.val).to.equal(4);
    expect(result.next.val).to.equal(2);
  });

  it("should return null if the val isn't present", function() {
    var list = new LinkedList();
    [1, 2, 3, 4, 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.search('foo')).to.equal(null);
  });

  it("should return null if the list is empty", function() {
    var list = new LinkedList();
    expect(list.search('foo')).to.equal(null);
  });
});
