// 25. K 个一组翻转链表
// 步骤1. 分组 2. 翻转
// 关键在于怎么样使反转后的链表相互连接
// 关键点：假指针指向头结点，让反转后的tail头指针的 变量 交换为head，这样假指针永远指向正确的结点

var reverseKGroup = function (head, k) {
  let dummyHead = new ListNode(0, head); // 关键1
  let pre = dummyHead;
  while (head) {
    let tail = pre;
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) return dummyHead.next;
    }
    let next = tail.next;
    [head, tail] = reverseList(head, tail); // 关键2
    pre.next = head;
    tail.next = next;
    pre = tail; // 记住 尾部的位置 下一次可以pre.next连接 新头部
    head = tail.next; // 记住 头部的位置 下一次就变成了新尾部 用tail.next连接下一个头部
  }
  return dummyHead.next;
};


function reverseList(head, tail) {
  let p = head;
  let pre = tail.next;
  while (pre !== tail) {
    let next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }
  return [tail, head];
}