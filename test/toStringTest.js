var LinkedList = require('../lib/linkedList').list;
var expect = require('chai').expect;

describe('LinkedList#toString', function() {
  it('should return a comma separated string of all values', function() {
    var list = new LinkedList();
    [1, 'two', 3, 'four', 5].forEach(function(n) {
      list.insert(n);
    });
    expect(list.toString()).to.equal("5, four, 3, two, 1");
  });

  it('should work with only one node', function() {
    var list = new LinkedList();
    list.insert(1);
    expect(list.toString()).to.equal("1");
  });

  it('should return null if the list is empty', function(){
    var list = new LinkedList();
    expect(list.toString()).to.equal(null);
  });
});
