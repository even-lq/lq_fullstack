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

function reverseList(head) {
  let p = head
  let pre = null
  while(p) {
    let next = p.next
    p.next = pre
    pre = p
    p = next
  }
  return pre
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


console.log(reverseList(list));
console.log(myReverse(list));