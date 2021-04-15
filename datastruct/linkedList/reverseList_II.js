let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {

      }
    }
  }
}


const myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const nex = p.next;
    p.next = prev;
    prev = p;
    p = nex;
  }
  return [tail, head];
}

const reverseList = (head) => {
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

var reverseBetween = function (head, left, right) {
  let dummyHead = new ListNode(0, head); // 关键1
  let small = dummyHead, big = dummyHead, pre = small;
  for (let i = 0; i < right; i++) {
    big = big.next;
    if (i < left) {
      pre = small;
      small = small.next;
    }
  }
  let next = null;
  if (big.next !== null) {
    next = big.next;
    big.next = null;
  }
  [small, big] = myReverse(small, big)
  pre.next = small;
  big.next = next;
  return dummyHead.next;

};
// console.log(myReverse(list));