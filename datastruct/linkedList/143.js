// 链表重排
// 思路我是想的出来的，但是没写出来
// 写法：关键在mergeList
// 关键1：合并的两个列表有两种情况 1. 两链表长度相等 2. 一个链表比另一个链表长一位
// 所以当h1和h2任意为null则跳出循环
const half = (head) => {
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const reverse = (head) => {
  let p = head;
  let pre = null;
  while (p) {
    let next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }
  return pre;
}

const mergeList = (h1, h2) => {
  while (h1 !== null && h2 !== null) {
    let h1_temp = h1.next;
    let h2_temp = h2.next;

    h1.next = h2;
    h1 = h1_temp;

    h2.next = h1;
    h2 = h2_temp;

  }
  
}
var reorderList = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head;

  let mid = half(head)
  let h1 = head;
  let h2 = mid.next;
  mid.next = null;

  h2 = reverse(h2);

  mergeList(h1, h2)
  return dummyHead.next
};