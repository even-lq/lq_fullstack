// 链表重排
const half = (head) => {
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const reverse = (head) => {
  let p = head;
  let pre = null;
  while (p) {
    let next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }
  return pre;
}

const mergeList = (h1, h2) => {
  while (h1 !== null && h2 !== null) {
    let h1_temp = h1.next;
    let h2_temp = h2.next;

    h1.next = h2;
    h1 = h1_temp;

    h2.next = h1;
    h2 = h2_temp;


  }
  
}
var reorderList = function (head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head;
  let p = head;
  // , cur = head
  let mid = half(head);
  let tail = reverse(mid.next);
  mid.next = null;

  let next = p.next;
  p.next = tail;
  p = tail;
  tail = tail.next;
  
  
  return dummyHead.next
};