"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryItem_1 = __importDefault(require("./BinaryItem"));
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
        const binaryItem = new BinaryItem_1.default(item);
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
exports.default = BinaryTree;
//# sourceMappingURL=BinaryTree.js.map