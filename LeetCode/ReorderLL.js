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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// rev LL
const reverseList = function (head) {
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

//get mid of LL
const getMid = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reorder = (l1, l2) => {
  let [first, next, second] = [l1, null, l2];
  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;
    next = second.next;
    second.next = first;
    second = next;
  }
};

var reorderList = function (head) {
  const mid = getMid(head);
  const reversedFromMid = reverseList(mid);
  reorder(head, reversedFromMid);
  return head;
};

// bad sol :(
// var reorderList = function (head) {
//   let curr = head;
//   let next = curr.next;
//   let blast = head;
//   while (blast?.next?.next) {
//     blast = blast.next;
//   }

//   if (next.next) {
//     blast.next.next = next;
//     curr.next = blast.next;
//     blast.next = null;
//     reorderList(next);
//   }
//   return head;
// };

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

console.log(reorderList(list.head));
