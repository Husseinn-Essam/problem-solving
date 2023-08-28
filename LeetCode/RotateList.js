const LinkedNode = require("../DataStuctures/LinkedNode");
const LinkedList = require("../DataStuctures/LinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// Recursive Sol O(N * K)

// var rotateRight = function (head, k) {
//   if (!head || !head.next || k == 0) return head;
//   let prev = head;
//   let tail = head;
//   while (tail.next) {
//     tail = tail.next;
//     if (prev.next.next) prev = prev.next;
//   }
//   prev.next = null;
//   tail.next = head;
//   if (k != 1) {
//     tail = rotateRight(tail, k - 1);
//   }
//   return tail;
// };

// 2nd Sol

var rotateRight = function (head, k) {
  //   if (k % 1000000000 == 0) k = k / (10 ^ 8);
  let length = 0;
  if (!head || !head.next || k == 0) return head;
  let prev = head;
  let tail = head;
  let ptr = head;
  while (ptr) {
    ptr = ptr.next;
    length++;
  }
  k = k % length;
  while (tail.next && k != 0) {
    tail = tail.next;
    if (prev.next.next) prev = prev.next;
    if (!tail.next) {
      prev.next = null;
      tail.next = head;
      prev = tail;
      k--;
      head = tail;
    }
  }

  //   return [tail.val, tail.next.val, tail.next.next.val];
  return tail;
};

// tests
const list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

console.log(rotateRight(list.head, 4));
