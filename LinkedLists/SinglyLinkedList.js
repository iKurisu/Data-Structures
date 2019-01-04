class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
    } else {
      let node = this.head;
      
      while (node.next) node = node.next;
      node.next = new SinglyLinkedListNode(value);
    }
  }

  delete() {
    let node = this.head;

    if (!node) {
      return false;
    } else if (!node.next) {
      this.head = null;   
    } else {
      while (node.next.next) node = node.next;
      node.next = null;
    }
  }

  toArray() {
    let node = this.head;
    if (!node) return [];

    const array = [node.data];

    while (node.next) {
      node = node.next;
      array.push(node.data);
    }

    return array;
  }

  get size() {
    return this.toArray().length;
  }
}

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}