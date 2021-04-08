import { TreeNode } from "../508. 出现次数最多的子树元素和";

function sumNumbers(root: TreeNode | null): number {
  let queue = []
  if (!root) {
    return 0
  }
  function getNum(root: TreeNode | null, res: number) {
    root.left && getNum(root.left, +(String(res) + String(root.left.val)))
    root.right && getNum(root.right, +(String(res) + String(root.right.val)))
    if (!root.left && !root.right) queue.push(res)
  }
  getNum(root, root.val)
  return queue.reduce((all, item) => all + item, 0)
}

console.log(sumNumbers({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }));
