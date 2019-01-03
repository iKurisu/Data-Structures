class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new DoubleLinkedListNode(value);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      
      node.next = new DoubleLinkedListNode(value);
      node.next.previous = node;
    }
  }
}

class DoubleLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}