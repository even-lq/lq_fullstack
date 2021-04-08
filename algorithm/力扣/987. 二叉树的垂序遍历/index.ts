import { TreeNode } from './../508. 出现次数最多的子树元素和/index';
function verticalTraversal(root: TreeNode | null): number[][] {
  if (!root) return []
  let min = Math.min()
  let obj = {}
  let queue: TreeNode[] = []
  queue.push(root)
  function collection(x: number) {
    if (!queue.length) return
    let node = queue.shift()
    x < min && (min = x)
    if (!obj[x]) obj[x] = []
    obj[x].push(node.val)
    if (node.left) {
      queue.push(node.left)
      let y = x - 1
      collection(y)
    }
    if (node.right) {
      queue.push(node.right)
      let y = x + 1
      collection(y)
    }
  }
  collection(0)
  let result: number[][] = []
  Object.keys(obj).forEach(item => {
    result[+item - min] = obj[item]
  })
  return result
};

verticalTraversal({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})