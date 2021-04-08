import { ListNode } from "../24. 两两交换链表中的节点";
var mergeInBetween = function (list1: ListNode | null, a: number, b: number, list2: ListNode | null) {
  let head = list1
  let res = list1
  let start = 1
  let endNode = list2
  while (head) {
    if (start === a) {
      // res.next = list2
      while (endNode.next) {
        endNode = endNode.next
      }
    }
    if (start === b + 1) {

      endNode.next = head.next
      res.next = list2
      return list1
    }
    head = head.next
    if (start < a) {
      res = res.next
    }
    start++
  }

};


console.log(mergeInBetween({
  val: 0,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}, 3, 4,

  {
    val: 10000,
    next: {
      val: 10001,
      next: {
        val: 10002,
        next: {
          val: 10003,
          next: {
            val: 10004,
            next: null
          }
        }
      }
    }
  }
).next.next.next.next.next.next.next.next);
