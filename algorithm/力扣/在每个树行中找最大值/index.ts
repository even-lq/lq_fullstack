import { TreeNode } from "../508. 出现次数最多的子树元素和";

function largestValues(root: TreeNode | null): number[] {

  if (!root) return []
  let result: number[] = []
  let queue: TreeNode[] = []
  queue.push(root)
  let i = 1
  while (queue.length) {

    let max = queue[0].val
    if (i === queue.length) {
      queue.forEach(item => {
        item.val > max && (max = item.val)
      })
      i = 0
      result.push(max)
    }
    let node = queue.shift()
    if (node.left) {
      queue.push(node.left)
      i++
    }
    if (node.right) {
      queue.push(node.right)
      i++
    }
  }
  return result
};


console.log(largestValues({ val: 5, left: { val: 2, left: { val: 4, left: null, right: { val: 13, left: null, right: null } }, right: { val: 12, left: null, right: null } }, right: { val: -5, left: { val: 8, left: null, right: null }, right: { val: 9, left: null, right: null } } }));
