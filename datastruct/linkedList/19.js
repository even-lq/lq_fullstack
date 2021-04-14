// 19. 删除链表的倒数第 N 个结点
// 寻找链表的特殊位置：快慢指针
// 1. 暴力法：算出链表的长度L，则L-n+1 就是待删除结点的前驱结点
// 2. 快慢指针：快慢指针的间距为n，
// 如果快指针移动到末尾（null），那么慢指针一定是快指针的前n个（慢指针与快指针相隔n）

// 1. 暴力
var removeNthFromEnd = function (head, n) {
  let node = head;
  let length = 0;
  while (node) {
    ++length;
    node = node.next;
  }
  console.log(length)
  let dummyHead = new ListNode(0, head);
  let pre = dummyHead, cur = null;
  for (let i = 0; i <= length - n; i++) {
    cur = pre
    pre = pre.next
  }
  let next = pre.next
  pre.next = null
  cur.next = next
  return dummyHead.next
};
// 2. 快慢指针
var removeNthFromEnd = function (head, n) {
  let node = head;
  let length = 0;
  while (node) {
    ++length;
    node = node.next;
  }
  console.log(length)
  let dummyHead = new ListNode(0, head);
  let pre = dummyHead, cur = null;
  for (let i = 0; i <= length - n; i++) {
    cur = pre
    pre = pre.next
  }
  let next = pre.next
  pre.next = null
  cur.next = next
  return dummyHead.next
};