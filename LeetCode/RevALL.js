/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const LinkedList = require("../DataStuctures/LinkedList");
const ListNode = require("../DataStuctures/LinkedNode");

var reverseList = function (head) {
  const isBaseCase = !head?.next;
  if (isBaseCase) return head;
  let curr = head;
  let prev = null;
  let aux;
  while (curr) {
    aux = curr.next;
    curr.next = prev;
    prev = curr;
    curr = aux;
  }
  return prev;
};

const list = new LinkedList();
list.append(2);
list.append(3);
list.append(4);

console.log(reverseList(list.head));
