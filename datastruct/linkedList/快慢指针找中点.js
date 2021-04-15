const half = (head) => {
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}