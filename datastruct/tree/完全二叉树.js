// 写一个函数，输入完全二叉树的前序遍历（根左右），然后返回二叉树结构。
// 比如下面这个 3 层的完全二叉树：
//      1
//   2     3
// 4  5  6
// 前序遍历是 [1, 2, 4, 5, 3, 6]
//
// 或者下面这个 4 层的完全二叉树
//        1
//     2     3
//   4  5  6   7
// 8
// 前序遍历是 [1, 2, 4, 8, 5, 3, 6, 7]
//
// 返回示例：{ value: 1, left: { ... }, right: { ... } }

/**
 * 递归的解题思路：
 * 假设完全二叉树有 n 层，有以下几个特性:
 * 1. 左子树和右子树至少有一边是满二叉树；
 *   第一种情况，最后一层的数量大于等于最后一层最大数量的一半，此时左子树是 n - 1 层的满二叉树；
 *   第二种情况，最后一层的数量小于最后一层最大数量的一半，此时右子树是 n - 2 层的满二叉树。
 * 2. 前 n - 1 层一定是满二叉树，节点数量 = 2^(n-1) - 1；完全二叉树的数量减去前 n - 1 层的数量就能够拿到最后一层的数量。
 * 3. 最后一层的最大数量 = 2^(n - 1) 。
 *
 * 所以按照这样的思路的话，可以通过计算二叉树的层数，计算最后一层的数量，然后拆分左子树和右子树，利用递归进行解题。
 **/
function TreeNode(data, left, right) {
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.value = data === undefined ? 0 : data;
}

function createTree(n, x = 0) {
  let node = new TreeNode();
  if (x <= n) {
    node.left = createTree(n, 2 * x + 1);
    node.right = createTree(n, 2 * x + 2);
  } else {
    node = null;
  }
  return node;
}
function insertTree(node, preOrder) {
  if (node !== null && preOrder.length !== 0) {
    node.value = preOrder.shift();
    insertTree(node.left, preOrder);
    insertTree(node.right, preOrder);
  } else return;
  return node;
}
function recoverTree(preOrder) {
  // 先写一部分伪代码，然后再开始编码

  //  1. 完全二叉树只要一种遍历就可以形成
  //  2. 根据 每个结点的序号与层数的关系 左结点序号：2 * n + 1    右结点序号：2 * n + 2 构造出空的全部完全二叉树
  //     结点的序号与层数有关系，从0开始，1号左结点： 2 * 0 + 1 = 1, 2号右结点： 2 * 0 + 2 = 2
  //     ......
  //     最后一个7号左节点为  2 * 3 + 1 = 7 
  //  3. 用数组的顺序就是前序遍历的顺序，即可填充二叉树
  let node = null;
  node = createTree(preOrder.length - 1);
  node = insertTree(node, preOrder);
  console.log(node);
}
recoverTree([1, 2, 4, 8, 5, 3, 6, 7]);
