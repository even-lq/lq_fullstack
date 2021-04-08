import { ListNode } from "../24. 两两交换链表中的节点";
import { TreeNode } from "../508. 出现次数最多的子树元素和";

function sortedListToBST(head: ListNode | null): TreeNode | null {
  let queue: number[] = []

  while (head) {
    queue.push(head.val)
    head = head.next
  }
  function generateTree(arr: number[]) {
    let len = arr.length
    if (len === 0) return null
    let middle = len % 2 === 0 ? len / 2 - 1 : Math.floor(len / 2)
    let Tree = new TreeNode(arr.splice(middle, 1)[0])
    Tree.left = generateTree(arr.slice(0, middle))
    Tree.right = generateTree(arr.slice(middle))
    return Tree
  }
  return generateTree(queue)
}

sortedListToBST({
  val: -10,
  next: {
    val: -3,
    next: {
      val: -0,
      next: {
        val: 5,
        next: null
      }
    },
  }
})

console.log(sortedListToBST({
  val: -10,
  next: {
    val: -3,
    next: {
      val: -0,
      next: {
        val: 5,
        next: null
      }
    },
  }
}));
