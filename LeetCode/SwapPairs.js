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
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// O(n)
var swapPairs = function (head) {
  let curr = head;
  let adj = curr ? curr.next : null;

  // swap pair
  if (adj) {
    curr.next = adj.next;
    adj.next = curr;
    let checker = curr.next;
    if (checker && checker.next) {
      const swapped = swapPairs(curr.next);
      curr.next = swapped;
    }
  }

  return adj ? adj : curr;
};

const list = new LinkedList();
const list2 = new LinkedList();
list.append(18);
list.append(6);
list.append(10);
list.append(4);
list.append(5);
list.append(6);
list2.append(1);
// list2.append(2);
// list2.append(3);
// list2.append(4);
// list2.append(46);
// list2.append(52);
// list2.append(1);

console.log(swapPairs(list2.head));
