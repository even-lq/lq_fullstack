import { ListNode } from "../24. 两两交换链表中的节点";

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head && !head.next) return null
  let fast = head
  let sort = head

  while (sort && fast) {
    sort = sort.next
    fast = fast.next.next
    if (sort === fast) {
      while (sort !== head) {
        sort = sort.next
        head = head.next
      }
      return head
    }
  }
  return null

};