//   Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  let val = root.val;
  if (val > p.val && val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (val < p.val && val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
// tests
// Constructing the binary tree [6,2,8,0,4,7,9,null,null,3,5]
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
let p1 = 2;
let q1 = 8;
// Tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
// let root1 = new TreeNode(3);
// root1.left = new TreeNode(5);
// root1.right = new TreeNode(1);
// root1.left.left = new TreeNode(6);
// root1.left.right = new TreeNode(2);
// root1.left.right.left = new TreeNode(7);
// root1.left.right.right = new TreeNode(4);
// root1.right.left = new TreeNode(0);
// root1.right.right = new TreeNode(8);
// let p1 = root1.left;
// let q1 = root1.right;
console.log(lowestCommonAncestor(root, p1, q1)); // Expected output: 3
