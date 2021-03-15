// 链表的删除
// 给定一个排序的链表，删除所有重复的元素，使得每个元素只出现- -次
// 1>1>2 //1>2
// 1>1>2>3>3 //1>2>3


function ListNode(val) {
  this.val = val
  this.next = null
}

const deleteDuplicates = function (head) {
  let cur = head
  while (cur !== null & cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    // else {
    //   cur = cur.next
    // }
    cur = cur.next
  }
  return head
}
let l1 = { val: 1, next: { val: 1, next: { val: 3, next: { val: 3, next: { val: 4, next: null } } } } }
console.log(deleteDuplicates(l1));