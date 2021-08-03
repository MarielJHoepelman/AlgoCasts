// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.dataIn = new Stack();
    this.dataOut = new Stack();
  }

  add(record) {
    this.dataIn.push(record);
  }

  remove() {
    this.fromInToOut();
    const out = this.dataOut.pop();
    this.fromOutToIn();
    return out;
  }

  peek() {
    this.fromInToOut();
    const peek = this.dataOut.peek();
    this.fromOutToIn();
    return peek;
  }

  fromInToOut() {
    while (this.dataIn.peek()) {
      this.dataOut.push(this.dataIn.pop());
    }
  }

  fromOutToIn() {
    while (this.dataOut.peek()) {
      this.dataIn.push(this.dataOut.pop());
    }
  }
}

module.exports = Queue;
