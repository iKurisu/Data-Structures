class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      node.next = new SinglyLinkedListNode(value);
    }
  }
}

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}