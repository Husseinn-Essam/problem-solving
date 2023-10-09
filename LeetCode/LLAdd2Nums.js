const LinkedNode = require("../DataStuctures/LinkedNode");
const LinkedList = require("../DataStuctures/LinkedList");
const ListNode = require("../DataStuctures/LinkedNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// after coffee

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10; // gives ones postion ,ex: 15 -> 5
    curr.next = new ListNode(sum);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
};

// a pitful attempt to solve it without drinking my coffee
// var addTwoNumbers = function (l1, l2) {
//   let ptr1 = l1;
//   let ptr2 = l2;
//   let l3 = new LinkedNode();
//   let ptr3 = l3;
//   let sum = 0;
//   let counter = 0;
//   while (ptr1 || ptr2) {
//     if (ptr1 && ptr2) {
//       sum +=
//         ptr1.val * Math.pow(10, counter) + ptr2.val * Math.pow(10, counter);
//       counter++;
//       ptr1 = ptr1.next;
//       ptr2 = ptr2.next;
//     } else if (!ptr2 && ptr1) {
//       sum += ptr1.val * Math.pow(10, counter);
//       counter++;
//       ptr1 = ptr1.next;
//     } else if (ptr2 && !ptr1) {
//       sum += ptr2.val * Math.pow(10, counter);
//       counter++;
//       ptr2 = ptr2.next;
//     }
//   }
//   return sum;
// };

const list = new LinkedList();
const list2 = new LinkedList();
list.append(2);
list.append(4);
list.append(3);

list2.append(5);
list2.append(6);
list2.append(4);

console.log(addTwoNumbers(list.head, list2.head));
