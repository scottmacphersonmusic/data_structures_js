var load = require('../lib/linkedList');
var LinkedList = load.list;
var Node = load.node;
var expect = require('chai').expect;

describe('LinkedList#insert', function() {
  it('should insert a node', function() {
    var list = new LinkedList();
    // insert one item
    list.insert(7);
    expect(list.head.val).to.equal(7);
    expect(list.head.next).to.equal(null);
    expect(list.head.prev).to.equal(null);
    expect(list.tail).to.equal(null);
    // insert a second item
    list.insert('banana');
    expect(list.head.val).to.equal('banana');
    expect(list.head.next.val).to.equal(7);
    expect(list.tail.val).to.equal(7);
    expect(list.tail.prev.val).to.equal('banana');
    // insert a third item
    list.insert(true);
    expect(list.head.val).to.equal(true);
    expect(list.head.next.val).to.equal('banana');
    expect(list.head.next.next.val).to.equal(7);
    expect(list.tail.val).to.equal(7);
    expect(list.tail.prev.val).to.equal('banana');
    expect(list.tail.prev.prev.val).to.equal(true);
  });
});
