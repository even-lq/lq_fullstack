
// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function findFrequentTreeSum(root: TreeNode | null) {
  if (!root) return [0]
  let map = {}
  let arr: number[]
  function Each(node: TreeNode | null) {
    let val = 0
    val += node.val
    node.left && (val += Each(node.left))

    node.right && (val += Each(node.right))
    if (!map[val]) map[val] = 0
    map[val] += 1
    return val
  }
  Each(root)

  console.log(map);

  return arr


  //后续将map转华arr
};

findFrequentTreeSum({ val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, left: null, right: null } })