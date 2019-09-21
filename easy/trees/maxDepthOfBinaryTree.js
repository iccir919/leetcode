/*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let greatest = 0;
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  function traverse(root, sum) {
    sum += 1;
    if (root.left === null && root.right === null) {
      if (greatest < sum) {
        greatest = sum;
        return;
      }
    }

    if (root.left) traverse(root.left, sum);
    if (root.right) traverse(root.right, sum);
  }

  if (root.left) traverse(root.left, 1);
  if (root.right) traverse(root.right, 1);

  return greatest;
};
