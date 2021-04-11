var insertionSortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let p = head, cur = head.next
  while (cur !== null) {
    if (p.val <= cur.val) {
      p = p.next
    } else {
      let pre = dummyHead
      // let pre = dummyHead.next
      // 不能等于dummyHead.next，因为要先判断第一个值是小的才能够移动
      // 1.先判断头结点的值是否小于当前值
      // 2.是：pre移动到头结点，否：不移动
      while (pre.next.val <= cur.val) {
        pre = pre.next
      }
      p.next = cur.next
      cur.next = pre.next
      pre.next = cur
    }
    cur = p.next
  }
  return dummyHead.next
};
console.log(insertionSortList());