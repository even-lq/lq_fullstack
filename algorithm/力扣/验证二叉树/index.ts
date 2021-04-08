import { TreeNode } from "../508. 出现次数最多的子树元素和";

let root: TreeNode = { left: null, right: null, val: 0 }
function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]) {
  function next(root: TreeNode | null) {
    if (!root) return root
    let left = leftChild.shift()!
    let right = rightChild.shift()!
    if (left === -1) {
      root.left = null
    } else {
      root.left = {
        left: null,
        right: null,
        val: left
      }
    }
    if (right === -1) {
      root.right = null
    } else {
      root.right = {
        left: null,
        right: null,
        val: right
      }
    }
    return root
  }
  let res = next(root)

  root.left = next(res!.left)
  root.right = next(res!.right)
  console.log(root);

};

validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1])



