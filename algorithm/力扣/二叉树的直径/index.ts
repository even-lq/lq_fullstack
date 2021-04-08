import { TreeNode } from "../508. 出现次数最多的子树元素和";



function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  function getDeep(root: TreeNode | null): number {
    return !root ? 0 : Math.max(getDeep(root.left), getDeep(root.right)) + 1;
  };
  return getDeep(root.left) + getDeep(root.right) + 1
};



console.log(diameterOfBinaryTree({ val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, left: null, right: null } }));
