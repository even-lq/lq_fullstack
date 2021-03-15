//链表的合并
//将两个有序链表合并成-个新的有序链表并返回,
//新链表是通过拼接给定的两个链表的所有节点组成的
// 1 > 2 > 4  1 > 3 > 4  ===> 1 > 1 > 2 > 3 > 4 > 4

// 思路:处理链表的本质,就是处理链表结点之间的指针关系
function ListNode(val) {
  this.val = val
  this.next = null
}

const mergeTwoLists = function (l1, l2) {
  // 头结点
  let head = new ListNode()
  // 遍历指针
  let cur = head

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 !== null ? l1 : l2

  return head.next

}
let l1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
let l2 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
console.log(mergeTwoLists(l1, l2));

