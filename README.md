# data_structures_js
By [Scott Macpherson](https://github.com/scottmacphersonmusic)

### Description
data_structures_js is a small Node project that implements classic data structures in JavaScript.

### Structures
- Doubly Linked List
- Binary Search Tree

### Usage
##### Doubly Linked List
Create a **new** doubly linked list:

`list = new LinkedList();`

**Insert** new values at the head of the list:

`list.insert(1);`

```javascript
['two', 3, 'four', 5].forEach(function(val) {
  list.insert(val);
});
```

**Search** for a value in the list:

`list.search('four');` will return the string `'four'`

- *searching for a value that isn't in the list will return `null`*

**Remove** a value from the list:

`list.remove(3);` will return `3` and the node containing that value will no longer be in the list.

- *attempting to remove a value that isn't in the list will return `null`*

**Print** a list of all all the values in the list:

`console.log(list.toString());` will return `'5, four, two, 1'`

- *(remember we removed 3)*
- *calling `toString()` on an empty list will return `null`*

##### Binary Search Tree
`BinSearchTree` takes three arguments: `val`, `left`, and `right`.  If you don't provide `left` or `right` they will default to an instance of `NullBinTree`.

Create a **new** binary search tree:

`bst = new BinSearchTree(7);`

To **insert** a new value:

`bst.insert(4);`

To determine whether the tree **contains** a value:

```javascript
bst.contains(4);  // => returns true
```

To calculate the **size** of the tree:

```javascript
bst.size();  // => returns 2
```

To calculate the **depth** of the tree:

```javascript
bst.depth();  // => returns 2
```

To calculate the total **balance** of the tree:

```javascript
bst.balance();   // => returns 1
```

###### Approach
The `insert` method uses pre-order traversal.

Each method in `BinSearchTree` uses recursive calls to accumulate a return value.

This binary search tree implementation makes use of the *null object pattern* to handle its base-cases.  `NullBinTree` responds to everything a `BinSearchTree` does, but returns either `0`, `false` or `null` depending on the context.

There are four methods available for traversing the tree, including each of the depth-first approaches (`preOrder`, `inOrder` and `postOrder`) as well as a breadth-first approach (`breadthFirst`).  The depth-first traversals each use recursion to navigate the tree structure.  The breadth-first traversal builds-up a queue of tree objects encountered in a left-to-right/top-down progression through a tree structure, then shifts the first object off the queue, records the value to a results array and repeats until the queue is empty.

### Contributing
1. Fork It
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request


### License
data_structures_js is released under the [MIT License](http://opensource.org/licenses/MIT)
