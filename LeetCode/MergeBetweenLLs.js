const LinkedNode = require("../DataStuctures/LinkedNode");
const LinkedList = require("../DataStuctures/LinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} list1
//  * @param {number} a
//  * @param {number} b
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

// O(b)
var mergeInBetween = function (list1, a, b, list2) {
  let i = 0;
  let j = 0;
  let afterB = list1;
  let beforeA = list1;
  let secListTail = list2;
  while (secListTail.next) {
    secListTail = secListTail.next;
  }
  while (i <= b) {
    afterB = afterB.next;
    i++;
  }
  while (j != a - 1) {
    beforeA = beforeA.next;
    j++;
  }
  // make final list
  beforeA.next = list2;
  secListTail.next = afterB;
  return list1;
};

const list = new LinkedList();
const list2 = new LinkedList();
list.append(18);
list.append(6);
list.append(10);
list.append(4);
list.append(5);
list.append(6);
list2.append(5);
list2.append(7);
list2.append(19);
list2.append(46);
list2.append(52);
list2.append(1);

console.log(mergeInBetween(list.head, 1, 3, list.head));
