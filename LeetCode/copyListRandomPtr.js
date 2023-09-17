/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
  let curr = head;
  //   const newNode = new Node(head.val, head.next, null);
  //   let newListPtr = newNode;
  let hashMap = new Map();
  hashMap.set(null, null);

  while (curr) {
    const newNode = new Node(curr.val, null, null);
    hashMap.set(curr, newNode);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const newNode = hashMap.get(curr);
    newNode.next = hashMap.get(curr.next);
    newNode.random = hashMap.get(curr.random);
    curr = curr.next;
  }
  return hashMap.get(head);
};
