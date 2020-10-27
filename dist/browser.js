"use strict";
class BinaryItem {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.prev = null;
    }
}

//# sourceMappingURL=BinaryItem.js.map

"use strict";
class BinaryTree {
    constructor(basedOn) {
        this.basedOn = basedOn;
        this.head = null;
        this.restored = [];
    }
    clear() {
        this.head = null;
    }
    delete(by) {
        if (!this.head) {
            return false;
        }
        const item = this.find(this.head, by);
        const isDeleting = true;
        if (item) {
            if (!item.prev) {
                return false;
            }
            this.restored = [];
            this.restore(item, isDeleting, by);
            item.left = null;
            item.right = null;
            if (item.data[this.basedOn] > item.prev.data[this.basedOn]) {
                item.prev.right = null;
            }
            else {
                item.prev.left = null;
            }
            this.restored.forEach((el) => this.pushItem(el.data));
            return true;
        }
        return false;
    }
    getItem(by) {
        if (!this.head) {
            return;
        }
        else {
            const item = this.find(this.head, by);
            return item ? item.data : undefined;
        }
    }
    pushItem(item) {
        const binaryItem = new BinaryItem(item);
        if (!this.head) {
            this.head = binaryItem;
            return true;
        }
        else {
            return this.add(this.head, this.basedOn, binaryItem);
        }
    }
    restoreOriginal() {
        this.restored = [];
        this.restore(this.head);
        return this.restored.map((el) => el.data);
    }
    add(head, basedOn, binaryItem) {
        if (binaryItem.data[basedOn] === head.data[basedOn]) {
            return false;
        }
        if (binaryItem.data[basedOn] > head.data[basedOn]) {
            if (head.right) {
                this.add(head.right, this.basedOn, binaryItem);
            }
            else {
                head.right = binaryItem;
                binaryItem.prev = head;
            }
            return true;
        }
        else if (binaryItem.data[basedOn] < head.data[basedOn]) {
            if (head.left) {
                this.add(head.left, this.basedOn, binaryItem);
            }
            else {
                head.left = binaryItem;
                binaryItem.prev = head;
            }
            return true;
        }
        return false;
    }
    find(head, by) {
        if (head.data[this.basedOn] === by) {
            return head;
        }
        else if (head.data[this.basedOn] < by) {
            return head.right ? this.find(head.right, by) : undefined;
        }
        else if (head.data[this.basedOn] > by) {
            return head.left ? this.find(head.left, by) : undefined;
        }
        else
            return;
    }
    restore(head = this.head, isDeleting, by) {
        if (!head) {
            return;
        }
        if (isDeleting === true && head.data[this.basedOn] === by) {
            this.restore(head.left);
            this.restore(head.right);
        }
        else {
            this.restored.push(head);
            this.restore(head.left);
            this.restore(head.right);
        }
    }
}

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
const users = [
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
//# sourceMappingURL=index.js.map