import { ListNode } from "../24. 两两交换链表中的节点";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let Link1 = headA
  let Link2 = headB
  let len1 = 0
  let len2 = 0
  while (Link2) {
    Link2 = Link2.next
    len2++
  }
  while (Link1) {
    Link1 = Link1.next
    len1++
  }

  let longLink = len2 > len1 ? headB : headA
  let sortLink = len2 > len1 ? headA : headB
  let diff = Math.abs(len2 - len1)
  while (diff--) {
    longLink = longLink.next
  }
  while (longLink && sortLink && longLink.val !== sortLink.val) {
    longLink = longLink.next
    sortLink = sortLink.next
  }
  return longLink
};

console.log(getIntersectionNode({ val: 1, next: { val: 2, next: null } }, { val: 3, next: null }));
