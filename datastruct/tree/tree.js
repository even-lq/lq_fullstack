// 数据域，左子树，右子树

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const node = new TreeNode(1)

// 先序遍历
// 中序遍历
// 后序遍历 == 递归遍历
// 层次遍历 == 迭代遍历

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};
// ABDECF

// 先序遍历
let arr = []
function preorderTraversal(root) {
  if (root) {
    arr.push(root.val)
  } else return
  preorderTraversal(root.left)
  preorderTraversal(root.right)
}
preorderTraversal(root)
console.log(arr);