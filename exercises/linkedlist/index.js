// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    //if no head return
    if (this.head === null) {
      return;
    }
    //if head and head next is null clear head
    if (this.head.next === null) {
      this.clear();
    }

    if (this.head && this.head.next) {
      this.head = this.head.next;
    }
  }
}

module.exports = { Node, LinkedList };
