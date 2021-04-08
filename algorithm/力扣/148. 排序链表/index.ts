import { ListNode } from "../24. 两两交换链表中的节点";

function sortList(head: ListNode | null): ListNode | null {
  let arr: number[] = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  arr.sort((a, b) => a - b)
  let res: ListNode | null = null
  let tmp: ListNode | null = null
  arr.forEach(item => {
    if (res === null) {
      res = new ListNode(item)
      tmp = res
    } else {
      tmp.next = new ListNode(item)
      tmp = tmp.next
    }
  })
  return res
};

console.log(sortList({ val: 5, next: { val: 3, next: { next: null, val: 2 } } }));
