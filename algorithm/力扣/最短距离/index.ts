import { TreeNode } from './../508. 出现次数最多的子树元素和/index';

function sort(tree: TreeNode, val1: number, val2: number) {
  let result: TreeNode[][] = []
  function tro(node: TreeNode, arr: TreeNode[]) {
    if (node.val === val1 || node.val === val2) {
      result.push([...arr, node])
    }
    node.left && tro(node.left, [...arr, node])
    node.right && tro(node.right, [...arr, node])

  }
  tro(tree, [])
  while (result[0].length) {
    if (result[0].shift() !== result[1].shift()) {
      return result[0].length + result[1].length + 2
    }
  }
  return result[1].length
}
console.log(sort({
  val: 3,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: null
  }
}, 3, 9));
