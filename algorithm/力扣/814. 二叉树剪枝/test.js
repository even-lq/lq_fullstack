var pruneTree = function (root) {
  if (root === null) return null
  // 递归
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  // 包含1则保留所有紫薯，不包含1则返回null
  return root.val === 0 && root.left === null && root.right === null ? null : root
};


console.log(pruneTree({
  val:1,
  left:{
    left:{
      left:{
        left:{
          left:null,
          right:null,
          val:1
        },
        right:null,
        val:0
      },
      
      right:null,
      val:0
    },
    right:{
      left:null,
      right:null,
      val:0
    },
    right:null,
    val:0
  },
  right:{
    left:null,
    right:null,
    val:0
  }
}));