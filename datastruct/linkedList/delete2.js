// 给定一个排序链表,删除所有的含有重复数字的节点，只保留原始链表中没有重复出现的数字
// 1 > 2 > 3 > 3 > 4 > 4 > 5   // 1 > 2 > 5
// 1 > 1 > 1 > 2 > 3     // 2 > 3
function ListNode(val) {
  this.val = val
  this.next = null
}

const deleteDuplicates = function (head) {

  // 没有值
  if (!head || !head.next) {
    return head
  }
  // 虚拟前驱结点
  let dummy = new ListNode()
  dummy.next = head

  let cur = dummy 
  while (cur.next !== null & cur.next.next !== null) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
let l1 = { val: 1, next: { val: 1, next: { val: 3, next: { val: 3, next: { val: 3, next: { val: 4, next: null } } } } } }
console.log(deleteDuplicates(l1));