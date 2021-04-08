import { TreeNode } from './../508. 出现次数最多的子树元素和/index';
function addOneRow(root: TreeNode | null, v: number, d: number): TreeNode | null {
  if (d === 1) {
    return {
      left: root,
      right: null,
      val: v
    }
  }
  let queue: { node: TreeNode, deep: number }[] = []
  queue.push({ node: root, deep: 1 })
  while (queue.length) {
    let cur = queue.shift()
    if (cur.deep + 1 === d) {
      if (cur.node.left) {
        let left = cur.node.left
        cur.node.left = {
          left,
          val: v,
          right: null
        }
      }
      if (cur.node.right) {
        let right = cur.node.right
        cur.node.right = {
          right,
          val: v,
          left: null
        }
      }
    }
    if (cur.deep + 1 < d) {
      cur.node.left && queue.push({ node: cur.node.left, deep: cur.deep + 1 })
      cur.node.right && queue.push({ node: cur.node.right, deep: cur.deep + 1 })
    }

  }
  return root
};

console.log(addOneRow({
  left: {
    left: {
      left: null,
      right: null,
      val: 3
    },
    right: {
      left: null,
      right: null,
      val: 1
    },
    val: 2
  },
  right: {
    left: {
      left: null,
      right: null,
      val: 5
    },
    right: null,
    val: 6
  },
  val: 4
}, 1, 2));
