import { ListNode } from "../24. 两两交换链表中的节点";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let cur = new ListNode()
  cur.next = head
  let now = cur.next
  while (now.next) {
    if (now.val === val) {
      now = now.next
    } else {
      now.next = now.next.next
    }
  }

  return cur.next
};