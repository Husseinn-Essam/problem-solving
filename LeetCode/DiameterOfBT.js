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
// passing res by ref sol
var diameterOfBinaryTree = function (root, res = [0]) {
  dfs(root, res);
  return res[0];
};

const dfs = (root, res) => {
  const baseCase = root === null;
  if (baseCase) return 0;
  const left = dfs(root.left, res);
  const right = dfs(root.right, res);
  const diameter = left + right;
  res[0] = Math.max(res[0], diameter);
  const height = Math.max(left, right);
  return height + 1;
};
//  THE BETTER SOL
//global var and function in scope sol
var diameterOfBinaryTree = function (root) {
  let res = 0;
  dfs(root, res);

  return res;
  function dfs(root) {
    const baseCase = root === null;
    if (baseCase) return 0;
    const left = dfs(root.left, res);
    const right = dfs(root.right, res);
    const diameter = left + right;
    res = Math.max(res, diameter);
    const height = Math.max(left, right);
    return height + 1;
  }
};
