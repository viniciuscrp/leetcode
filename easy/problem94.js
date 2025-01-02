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
 * @return {number[]}
 */

class Node {
  constructor(v) {
    this.val = v;
    this.left = null;
    this.right = null;
  }
}

var inorderTraversal = function(root) {
  if (root === null) {
    return [];
  }

  var stack = [];
  var nums = [];
  var current = root;

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    var last = stack.pop();
    nums.push(last.val);
    current = last.right;
  }

  return nums;
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
console.log(inorderTraversal(root));
