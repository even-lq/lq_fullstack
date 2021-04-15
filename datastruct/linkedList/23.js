// 我的方法：迭代合并有序链表，让 i + 1的值赋值为合并后的值
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function merge(h1, h2) {
  let head = new ListNode();
  let cur = head;
  while (h1 && h2) {
    if (h1.val <= h2.val) {
      cur.next = h1;
      h1 = h1.next;
    } else {
      cur.next = h2;
      h2 = h2.next;
    }
    cur = cur.next;
  }

  if (h1 !== null) {
    cur.next = h1;
  } else if (h2 !== null) {
    cur.next = h2;
  }
  return head.next;
}
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  for (let i = 0; i < lists.length; ++i) {
    if (i + 1 < lists.length) {
      lists[i + 1] = merge(lists[i], lists[i + 1]);
    }
  }
  return lists[lists.length - 1];
};






