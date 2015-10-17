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

LinkedList.prototype.remove = function(val) {
  if (!this.head)
    return null;

  var current = this.head;            // traverse list
  while (current.val != val) {
    if (!current.next)
      return null;
    current = current.next;
  }

  if (current.prev) {
    current.prev.next = current.next;
  } else {                            // current is this.head
    var result = current.val;
    if (current.next) {
      this.head = current.next;
      this.head.prev = null;
    } else {                          // only one node
      this.head = null;
    }
    return result;
  }

  if (current.next) {
    current.next.prev = current.prev;
  } else {                            // current is this.tail
    var result = current.val;
    if (current.prev.prev) {
      this.tail = current.prev;
      this.tail.next = null;
    } else {                          // only two nodes
      this.tail = null;
      this.head.next = null;
    }
    return result;
  }

  return current.val;
};

LinkedList.prototype.toString = function(){
  if (!this.head) {
    return null;
  }

  var str = '';
  var current = this.head;

  if (!current.next) {                // only one node
    str += current.val;
    return str;
  }

  while (current.next) {
    str += current.val + ', ';
    current = current.next;
  }
  str += this.tail.val;
  return str;
};

module.exports = {
  list: LinkedList,
  node: Node
};
