//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if ((p && !q) || (!p && q)) {
    return false;
  }
  if (!p && !q) return true;
  if (p?.val == q?.val) {
    let left = isSameTree(p?.left, q?.left);
    let right = isSameTree(p?.right, q?.right);
    return left && right;
  } else {
    return false;
  }
};

// Tree 1
let p3 = new TreeNode(1);

// Tree 2
let q3 = null;

console.log(isSameTree(p3, q3)); // Expected output: false
