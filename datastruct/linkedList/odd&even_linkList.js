// 328 奇数，偶数链表
// 关键点：所有奇数节点都在偶数节点前面，所以就用偶数节点指针来作为迭代的判断条件
// even.next = odd.next, even = even.next 奇数节点的下一个节点就是偶数节点（偶数同理）
// 所以如果奇数后面是null，则最终even === null；如果偶数后面是null，则最终even.next === null
var oddEvenList = function (head) {
  if (head === null) {
    return head
  }
  let odd = head, evenHead = head.next;
  let even = evenHead
  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
};