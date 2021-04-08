import { TreeNode } from "../508. 出现次数最多的子树元素和"

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)
  return root
};

console.log(invertTree({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  },

}));
