/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var node = head;
  while (node.next !== undefined) {
    if (node.val === node.next.val) {
      let nextNode = node.next.next;
      let nodeDel = node.next;
      delete (nodeDel);
      node.next = nextNode;
    } else {
      node = node.next;
    }
  }

  return head;
};

var factory = function(nums) {
  var head = {
    val: 0,
    next: undefined
  };

  var node = head;
  for (var i = 0; i < nums.length; i++) {
    node.val = nums[i];
    node.next = {
      val: undefined,
      next: undefined,
    };

    node = node.next;
  }

  return head;
}

console.log(deleteDuplicates(factory([1, 1, 1]))); 
