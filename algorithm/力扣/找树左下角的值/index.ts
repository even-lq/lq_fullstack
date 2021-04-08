import { TreeNode } from "../508. 出现次数最多的子树元素和";

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0
  let queue: TreeNode[] = []
  queue.push(root)
  let result = 0
  while (queue.length) {
    let node = queue.shift()
    node.right && queue.push(node.right)
    node.left && queue.push(node.left)
    result = node.val
  }
  return result
};

console.log(findBottomLeftValue({ val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, right: { val: 22, left: null, right: null }, left: null } }));

