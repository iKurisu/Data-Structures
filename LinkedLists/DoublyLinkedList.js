class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new DoubleLinkedListNode(value);
    } else {
      let node = this.head;
      
      while (node.next) node = node.next;
  
      node.next = new DoubleLinkedListNode(value);
      node.next.previous = node;
    }
  }

  pop() {
    let node = this.head;

    if (!node) {
      return false;
    } else if (!node.next) {
      this.head = null;
    } else {
      while (node.next.next) node = node.next;

      const nodeToReturn = node.next;
      nodeToReturn.previous = null;
      
      node.next = null; 

      return nodeToReturn;
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

class DoubleLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

const list = new DoubleLinkedList();
list.insert(5);
list.insert(2);
list.insert(3);
const lastNode = list.pop();
list.insert(5)

console.log(list.size);

