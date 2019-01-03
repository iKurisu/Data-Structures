class Stack {
  constructor() {
    this.items = [];
  }

  insert(value) {
    this.items.push(value);
  }

  get() {
    return this.items.pop();
  }
}