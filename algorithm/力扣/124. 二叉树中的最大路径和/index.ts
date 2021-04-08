import { TreeNode } from "../508. 出现次数最多的子树元素和";

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0
  let max = -Infinity
  function pre(root: TreeNode) {
    let left = root.left && Math.max(0, pre(root.left)) || 0
    let right = root.right && Math.max(pre(root.right), 0) || 0
    // return Math.max(left, right)
    max = Math.max(max, left + right + root.val)
    return root.val + Math.max(left, right)
  }
  pre(root)
  return max
};


console.log(maxPathSum({
  val: -10,
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
);


console.log(maxPathSum({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
))