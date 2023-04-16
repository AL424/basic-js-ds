const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, elem) {
  let current = list;
  let prev = null;

  while(current !== null) {
    if (current.value === elem) {
      if (prev === null) {
        list = current.next;
        current = list;
      } else {
        prev.next = current.next;
        current =current.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
    //console.log('prev ', JSON.stringify(prev));
    //console.log('current ', JSON.stringify(current), '\n');
    
  }
  //console.log('list ', JSON.stringify(list));
  return list;
}

module.exports = {
  removeKFromList
};
