import BinaryItem from './BinaryItem';
import { IBinaryMatch } from './types/IBinaryMatch'; 

export default class BinaryTree {
  private head: null | BinaryItem = null;
  private restored: Array<BinaryItem> = [];

  constructor(private basedOn: string) {}

  public clear(): void {
    this.head = null;
  }

  public delete(by: number | string): boolean {
    if (!this.head) {
      return false;
    }
    const item = this.find(this.head, by);
    const isDeleting = true;
    if (item) {
      if (!item.prev) {
        return false;
      }
      this.restored  = [];
      this.restore(item, isDeleting, by);
      item.left = null;
      item.right = null;
      if (item.data[this.basedOn] > item.prev.data[this.basedOn]) {
        item.prev.right = null;
      } else {
        item.prev.left = null;
      }
      this.restored.forEach((el: BinaryItem): boolean => this.pushItem(el.data));
      return true;
    }
    return false;
  }

  public getItem(by: number | string): IBinaryMatch | void {
    if (!this.head) {
      return;
    } else {
      const item = this.find(this.head, by);
      return item ? item.data : undefined;
    }
  }

  public pushItem(item: IBinaryMatch): boolean {
    const binaryItem = new BinaryItem(item);
    if (!this.head) {
      this.head = binaryItem;
      return true;
    } else {
      return this.add(this.head, this.basedOn, binaryItem);
    }
  }

  public restoreOriginal(): Array<IBinaryMatch> {
    this.restored = [];    
    this.restore(this.head);
    return this.restored.map((el: BinaryItem): IBinaryMatch => el.data);
  }

  private add (head: BinaryItem, basedOn: string, binaryItem: BinaryItem): boolean {
    if (binaryItem.data[basedOn] === head.data[basedOn]) {
      return false;
    }
    if (binaryItem.data[basedOn] > head.data[basedOn]) {
      if (head.right) {
        this.add(head.right, this.basedOn, binaryItem);
      } else {
        head.right = binaryItem;
        binaryItem.prev = head;
      }
      return true;

    } else if (binaryItem.data[basedOn] < head.data[basedOn]) {
      if (head.left) {
        this.add(head.left, this.basedOn, binaryItem);
      } else {
        head.left = binaryItem;
        binaryItem.prev = head;
      }
      return true;
    }
    return false;
  }

  private find (head: BinaryItem, by:  number | string): undefined | BinaryItem {
    if (head.data[this.basedOn] === by) {
      return head;
    } else if (head.data[this.basedOn] < by ) {
      return head.right ? this.find(head.right, by) : undefined;
    } else if (head.data[this.basedOn] > by ) {
      return head.left ? this.find(head.left, by) : undefined;
    } else return;
  }

  private restore(head: BinaryItem | null = this.head, isDeleting?: boolean, by?: number | string) {
    if (!head) {
      return;
    }
    if (isDeleting === true && head.data[this.basedOn] === by) {
      this.restore(head.left);
      this.restore(head.right);
    } else {
      this.restored.push(head);
      this.restore(head.left);
      this.restore(head.right);
    }
  }
}