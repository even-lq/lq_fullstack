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
var mergeKLists = function (lists) {
  if (!lists.length) return null
  //递归出口，即数组中只剩一条链表时，合并完毕
  if (lists.length === 1) return lists[0]

  //两个一组的合并，合并完了更新数组（每次合并前两个）
  lists.splice(0, 2, mergeTwoLists(lists[0], lists[1]))
  //递归
  return mergeKLists(lists)
};

//尾插法合并两个链表
function mergeTwoLists(l1, l2) {
  let head = new ListNode(), pre = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      pre.next = l2
      l2 = l2.next
    } else {
      pre.next = l1
      l1 = l1.next
    }
    pre = pre.next
  }
  pre.next = l1 ? l1 : l2
  return head.next
};

