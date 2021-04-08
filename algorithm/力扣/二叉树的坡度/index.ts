import { TreeNode } from "../508. 出现次数最多的子树元素和"

function findTilt(root: TreeNode | null): number {
  let sum = 0
  function tro(node: TreeNode | null) {
    if (!node) return 0
    let tilt = Math.abs(tro(node.left) - tro(node.right))
    sum += tilt
    let res = pnode.val
    node.left && (res += node.left.val)
    node.right && (res += node.right.val)
    return res
  }
  tro(root)

  return sum

};

console.log(findTilt({ val: 4, left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 9, left: null, right: { val: 7, left: null, right: null } } }));
