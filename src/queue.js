const { NotImplementedError, ListNode } = require('../extensions/index.js');

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
  
  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    if (this.list) {
      let current = this.list;
      while (current.next !== null) current = current.next;
      current.next = new ListNode(value);
    } else {
      this.list = new ListNode(value);
    }
  }

  dequeue() {
    let current = this.list;
    this.list = current.next;

    return current.value;
  }
}

module.exports = {
  Queue
};
