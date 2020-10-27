#BinaryTree data structure realization on typescript

##Use

****
**in /src directory**

    uncompressed/uncompilled original .ts files

**in /dist directory**

    uncompressed compilled to es6 .js files

**Examples of how can you use that in you project you can find  in src/index.ts or dist/index.js**
Just @import class BinaryTree from <span style="color: blue;">src/BinaryTree.ts</span> or <span style="color: blue;">dist/BinaryTree.js</span> in your project. Than create instance of class BinaryTree and use methods.
In BinaryTree construcor you need send a string - name of field, based on which you want to create a tree, like that:
```html
const binaryTreeByID = new BinaryTree("id");
const binaryTreeByName = new BinaryTree("name");
const binaryTreeBySome = new BinaryTree("some");
```

**For see example of working you need:**
* Clone this rep
* Tap "npm install"
* Tap "npm run use"
You can run it in browser just open "./dist/insex.html" in browser.


##Methods
****
**- clear()**
delete all elements from tree

**- delete(value)**
delete one element from tree. Where "value" can be string or number.

Method return "true" if succes or "false" if something went wrong.

All children elements of deleted element will be re-added like a pushItem() method;

This is a heavy method, maybe better create a new Tree, than delete many elements.

**- getItem(value)**
Return one element. Where "value" can be string or number.

**- pushItem(value)**
Add new element in Tree. Where "value" can be object like that:
```
{
  id: 1,
  name: 'John',
  //much as you like fields
}
```
You can't add element if element with this id (or name or other field) already exist
Method return "true" if succes or "false" if something went wrong.

**- restoreOriginal()**
Return Array of all added elements. But not in the order of adding elements.

##Tests
****
**For test "npm run test" (Framework - ts-jest)**