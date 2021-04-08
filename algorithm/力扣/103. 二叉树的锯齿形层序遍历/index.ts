import { TreeNode } from "../508. 出现次数最多的子树元素和"

function zigzagLevelOrder(root: TreeNode | null): number[][] {

  let res: number[][] = []
  if (!root) return []
  let stack: { node: TreeNode, level: number }[] = []
  stack.push({ node: root, level: 0 })
  while (stack.length) {
    let cur = stack.shift()
    if (res[cur.level] === undefined) res[cur.level] = []
    cur.level % 2 === 0 ? res[cur.level].push(cur.node.val) : res[cur.level].unshift(cur.node.val)
    cur.node.left && stack.push(({ node: cur.node.left, level: cur.level + 1 }))
    cur.node.right && stack.push(({ node: cur.node.right, level: cur.level + 1 }))
  }
  return res
};


console.log(zigzagLevelOrder({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    },
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}));
