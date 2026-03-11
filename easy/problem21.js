/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  } else if (list1.value <= list2.value) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
      next: undefined
    }
  },
}

const list2 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 4,
      next: undefined
    }
  },
}

var result = (mergeTwoLists(list1, list2));
while (result.next !== undefined) {
  console.log(result.value);
  result = result.next;
}
