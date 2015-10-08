var Node = function(val, next, prev) {
  this.val = val ? val : null;
  this.next = next ? next : null;
  this.prev = prev ? prev : null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.insert = function(val) {
  if (!this.head && !this.tail) {             // empty
    this.head = new Node(val);
  }
  else if (!this.head.next) {                 // 1 item
    this.tail = this.head;
    this.head = new Node(val, this.tail);
    this.tail.prev = this.head;
  }
  else {                                      // 2+ items
    this.head = new Node(val, this.head);
    this.head.next.prev = this.head;
  }
};

LinkedList.prototype.search = function(val) {
  if (!this.head)
    return null;
  var current = this.head;
  while (current.val != val) {
    if (!current.next.next)
      return null;
    current = current.next;
  }
  return current;
};

module.exports = {
  list: LinkedList,
  node: Node
};
