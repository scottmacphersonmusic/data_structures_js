# data_structures_js
By [Scott Macpherson](https://github.com/scottmacphersonmusic)

### Description
data_structures_js is a small Node project that implements classic data structures in JavaScript.

### Structures
- Doubly Linked List
- *coming soon: Binary Tree*

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

### Contributing
1. Fork It
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
