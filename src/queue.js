const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
     return this.head;
  }

  enqueue(value) {
    const queue = { value, next: null };
    
    if (this.tail === null) {
      this.head = queue;
      this.tail = queue;
    } else {
      this.tail.next = queue;
      this.tail = queue;
    }
  }

  dequeue() {
    if (this.head === null) {
      return;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return removedValue;
  }
}

module.exports = {
  Queue
};
