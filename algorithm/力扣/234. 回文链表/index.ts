import { ListNode } from "../24. 两两交换链表中的节点";

function isPalindrome(head: ListNode | null): boolean {
  let queue = []

  while (head) {
    queue.push(head.val)
    head = head.next
  }
  while (queue.length > 1) {
    if (!(queue.pop() === queue.shift())) return false
  }
  return true
};