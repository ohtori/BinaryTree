import BinaryTree from './BinaryTree';
import { IBinaryMatch } from './types/IBinaryMatch';

// Use example '\_(o.o)_/'

// Create a instance of BinaryTree and pass to parameters
// field-name of object (which match to use with BinaryTree)
// for example "id"
const binaryTreeById = new BinaryTree('id');
// Adding elements to BinaryTree
binaryTreeById.pushItem({ id: 392, name: "Alisa" });
binaryTreeById.pushItem({ id: 395, name: "Sasha" });
binaryTreeById.pushItem({ id: 300, name: "Misha" });

// We can't add element if element was already pushed
binaryTreeById.pushItem({ id: 300, name: "Lena" });
// GetItem return an original element
console.log(binaryTreeById.getItem(300));

// If no such element in BinaryTree
console.log(binaryTreeById.getItem(200));


//Create array which fits for use with BinaryTree
const users: Array<IBinaryMatch> = [
  { id: 123, name: "Karl" },
  { id: 392, name: "Alisa" },
  { id: 445, name: "Katia" },
  { id: 87, name: "Ilia" },
  { id: 652, name: "Semen" },
  { id: 19, name: "Marina" },
  { id: 522, name: "German" },
  { id: 995, name: "Petr" },
  { id: 663, name: "Karina" },
  { id: 444, name: "Anna" },
  { id: 387, name: "Liza" },
  { id: 999, name: "Vasya" },
  { id: 313, name: "Karen" }
];

// Create a instance of BinaryTree and pass to parameters
// field name of object (which match to use with BinaryTree)
const binaryTreeById2 = new BinaryTree('id');
//For example we can add elements in forEach cycle or in other Array methods
users.forEach(binaryTreeById.pushItem.bind(binaryTreeById2));

// We can restore original Array with method restoreOriginal,
// but not in the order of adding items
console.log(binaryTreeById2.restoreOriginal());

// We can delete element
// but all children elements will be re-added like a pushItem() method;
// Read more at readme.md
binaryTreeById2.delete(522);
console.log(binaryTreeById2.restoreOriginal());

// At list we can create Binary tree by name or other field
const binaryTreeByName = new BinaryTree('name');
users.forEach(binaryTreeById.pushItem.bind(binaryTreeByName));