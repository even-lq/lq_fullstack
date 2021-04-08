
function invertTree(root) {
	
  if (root !== null) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left); 
    invertTree(root.right);
  }
  return root
}