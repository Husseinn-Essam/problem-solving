/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// var maxDepth = function (root) {
//   const baseCase = root == null;
//   if (baseCase) return 0;
//   const left = maxDepth(root.left) + 1;
//   const right = maxDepth(root.right) + 1;
//   if (root?.left) return left;
//   if (root?.right) return right;
//   return left > right ? left : right;
// };
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // View the first element in the queue
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print the queue elements
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
// BFS
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let Q = new Queue2();
  Q.enqueue(root);
  let height = 0;

  while (!Q.isEmpty()) {
    let nodeCount = Q.size();
    height++;

    while (nodeCount > 0) {
      let node = Q.dequeue();

      if (node.left) {
        Q.enqueue(node.left);
      }
      if (node.right) {
        Q.enqueue(node.right);
      }

      nodeCount--;
    }
  }
  return height;
};
