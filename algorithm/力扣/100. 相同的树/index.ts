import { TreeNode } from "../508. 出现次数最多的子树元素和";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if ((!p && q) || (p && !q)) return false
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return false

};

console.log(isSameTree({ val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, right: { val: 22, left: null, right: null }, left: null } }, { val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, right: { val: 232, left: null, right: null }, left: null } }));
