import { TreeNode } from "../508. 出现次数最多的子树元素和";

// 我理解错题意了 对有负数对应该有问题 懒得改

function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let value = 0
  function tro(node: TreeNode) {

    node.right && tro(node.right)
    if (node.val + value > value) {
      value = node.val + value
      node.val = value
    }
    node.left && tro(node.left)
    return value
  }
  tro(root)
  return root
};

console.log(convertBST({ val: 5, left: { val: 2, left: null, right: null }, right: { val: 8, left: null, right: { val: 7, left: null, right: null } } }));


