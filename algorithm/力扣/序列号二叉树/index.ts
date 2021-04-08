import { TreeNode } from "../508. 出现次数最多的子树元素和";

var serialize = function (root: TreeNode | null) {
  if (!root) return null
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};


var deserialize = function (data: string) {
  let nodeS = data.split(',')
  let stack: TreeNode[] = []
  let direction: 'left' | 'right' = 'left'
  let result: TreeNode | null = null
  if (nodeS.length === 1) return result
  result = new TreeNode(+nodeS[0])

  stack.push(result)
  for (let i = 0; i < nodeS.length - 1; i++) {
    if (nodeS[i + 1] !== 'null') {
      stack.push(result[direction] = new TreeNode(+nodeS[i + 1]))
      result = result[direction]
      direction = 'left'
    } else {
      result[direction] = null
      if (direction === 'right') {
        if (stack.length > 1) {
          stack.pop()
          result = stack[stack.length - 1]
        }
        while (stack.length > 1 && stack[stack.length - 1].right !== null) {
          stack.pop()
          result = stack[stack.length - 1]
        }
      }
      direction = 'right'
    }
  }
  return stack.pop()
};




let tree = { val: 5, left: { val: 2, left: { val: 4, left: null, right: { val: 13, left: null, right: null } }, right: { val: 12, left: null, right: null } }, right: { val: -5, left: { val: 8, left: null, right: null }, right: { val: 9, left: null, right: null } } }

console.log(JSON.stringify((deserialize(serialize(tree)))) === JSON.stringify(tree));

console.log((serialize(tree)));
