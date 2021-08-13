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
    // if (this.head.next === null) {
    //   this.clear();
    // }
    //
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    //if no head return
    if (this.head === null) {
      return;
    }
    //if no next node clear
    if (this.head.next === null) {
      this.clear();
      return;
    }

    let node = this.head;
    while (node.next) {
      node.next.next ? (node = node.next) : (node.next = null);
    }
  }

  insertLast(data) {
    const node = new Node(data);
    this.head ? (this.getLast().next = node) : (this.head = node);
  }

  getAt(integer) {
    if (this.head === null) {
      return null;
    }

    let counter = 0;
    let current = this.head;
    while (counter < integer) {
      counter++;
      current = current.next;
    }
    return current;
  }

  removeAt(integer) {
    if (this.head === null) {
      return;
    }

    if (integer === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let counter = 0;

    while (counter < integer) {
      if (current.next === null) {
        this.removeLast();
      } else if (current.next === this.getAt(integer)) {
        current.next = this.getAt(integer).next;
      }
      current = current.next;
      counter++;
    }
  }
}
module.exports = { Node, LinkedList };
