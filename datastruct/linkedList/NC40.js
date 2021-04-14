// 牛客题霸NC40两个链表生成相加链表
// 1. 栈：遇到需要反向操作的都考虑栈
// 2. 反转链表：链表反转后头结点一次相加就是正确的运算操作，还要注意进位
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

function addInList(head1, head2) {
  let h1 = reverseList(head1);
  let h2 = reverseList(head2);
  let res = null, cnt = 0;
  while (h1 || h2) {
    let val1 = h1 === null ? 0 : h1.val;
    let val2 = h2 === null ? 0 : h2.val;
    let sum = val1 + val2 + cnt;
    
    cnt = Math.floor(sum / 10) // 进位
    let tempNode = new ListNode(sum % 10); // 节点值：取余
    tempNode.next = res;
    res = tempNode;

    h1 = h1 === null ? null : h1.next;
    h2 = h2 === null ? null : h2.next;
  }
  if (cnt > 0) {  // 最终进位
    let tempNode = new ListNode(cnt);
    tempNode.next = res;
    res = tempNode;
  }
  return res;

}