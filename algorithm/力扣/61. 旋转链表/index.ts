
// Definition for singly-linked list.

import { ListNode } from "../24. 两两交换链表中的节点";

function rotateRight(head: ListNode | null, k: number): ListNode | null {

  if (!head || !head.next) {
    return head;
  }
  let curr = head;
  let len = 0;
  while (++len && curr.next) {
    curr = curr.next;
  }
  curr.next = head;
  k %= len;
  while (++k < len) {
    head = head.next;
  }
  let tmp = head;
  head = head.next;
  tmp.next = null
  return head;
};

console.log(rotateRight({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }, 3));
