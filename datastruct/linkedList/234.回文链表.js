// 找到前半部分链表的尾节点。
// 反转后半部分链表。
// 判断是否回文。
// 恢复链表。 虽然不需要恢复也能通过测试用例，但是使用该函数的人通常不希望链表结构被更改。
// 返回结果。

// 该方法虽然可以将空间复杂度降到 O(1)O(1)，但是在并发环境下，该方法也有缺点。在并发环境下，函数运行时需要锁定其他线程或进程对链表的访问，因为在函数执行过程中链表会被修改。

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
function reverseList(head) {
  let p = head;
  let tail = null;
  while (p) {
    let next = p.next;
    p.next = tail;
    tail = p;
    p = next;
  }
  return tail;
}

const half = (head) => {
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
var isPalindrome = function (head) {
  if (head === null) return true;

  const halfPoint = half(head);
  const tailLink = reverseList(halfPoint.next);

  let h1 = head;
  let h2 = tailLink;
  while (h2) {
    if (h1.val !== h2.val) return false;
    h1 = h1.next;
    h2 = h2.next;
  }
  halfPoint.next = reverseList(h2)
  return true;
};