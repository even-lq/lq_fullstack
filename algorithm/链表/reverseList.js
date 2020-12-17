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
console.log(reverseList(list));