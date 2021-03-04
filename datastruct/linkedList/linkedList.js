function ListNode(val) {
  this.val = val
  this.next = null
}

const node1= new ListNode(1)
node1.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// 1 => 3 => 2
node1.next = node3.next


// 在链表任意位置增加或删除的时间复杂度是多少？
// O(1)
// 链表查找的时间复杂度是O(n)

const index = 10
let node = head
for (let i = 0; i < index&&node; i++) {
  node = node.next
}