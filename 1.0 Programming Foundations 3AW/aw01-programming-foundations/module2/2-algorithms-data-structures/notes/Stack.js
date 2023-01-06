export default class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item); //built in push - add to end (or "top")
  }

  pop() {
    return this.items.pop(); // built in pop - remove from end ("top")
  }

  peek() {
    if (this.items.length == 0) {
      return null;
    }
    return this.items[this.items.length - 1]; // peek next item (bottom)
  }

  getSize() {
    return this.items.length;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
}
