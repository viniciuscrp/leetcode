/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class Node {
  constructor(v) {
    this.val = v;
    this.left = null;
    this.right = null;
  }
}

var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(1);

console.log(isSameTree(root, root));
