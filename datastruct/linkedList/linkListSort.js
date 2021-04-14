// leetcode 148 自顶向下归并
function merge(l1, l2) {
  let dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = l1, temp2 = l2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }

  if (temp1 !== null) {
    temp.next = temp1
  } else if (temp2 !== null) {
    temp.next = temp2
  }
  return dummyHead.next
}

function toSortList(head, tail) {
  if (head === null) {
    return head;
  }

  if (head.next === tail) {
    head.next = null
    return head
  }

  let slow = head, fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }
  let mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function (head) {
  return toSortList(head, null)
};

// 自底向下
function merge(l1, l2) {
  let dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = l1, temp2 = l2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }

  if (temp1 !== null) {
    temp.next = temp1
  } else if (temp2 !== null) {
    temp.next = temp2
  }
  return dummyHead.next
}

var sortList = function (head) {
  if (head === null) {
    return head
  }
  let length = 0
  let node = head
  while (node !== null) {
    length++
    node = node.next
  }
  const dummyHead = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead, cur = dummyHead.next
    while (cur !== null) {
      let h1 = cur
      for (let i = 1; i < subLength && cur.next !== null; i++) {
        cur = cur.next
      }
      let h2 = cur.next
      cur.next = null
      cur = h2
      for (let i = 1; i < subLength && cur !== null && cur.next !== null; i++) {
        cur = cur.next
      }
      let next = null
      if (cur !== null) {
        next = cur.next
        cur.next = null
      }
      const m = merge(h1, h2)
      prev.next = m
      while (prev.next !== null) {
        prev = prev.next
      }
      cur = next
    }
  }
  return dummyHead.next
};