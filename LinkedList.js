class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new LinkedListNode(value);
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      node.next = new LinkedListNode(value);
    }
  }
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}