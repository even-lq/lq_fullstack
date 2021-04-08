"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function findFrequentTreeSum(root) {
    if (!root)
        return [0];
    var map = {};
    var arr;
    function Each(node) {
        var val = 0;
        val += node.val;
        node.left && (val += Each(node.left));
        node.right && (val += Each(node.right));
        if (!map[val])
            map[val] = 0;
        map[val] += 1;
        return val;
    }
    Each(root);
    console.log(map);
    return arr;
    //后续将map转华arr
}
;
findFrequentTreeSum({ val: 5, left: { val: 2, left: null, right: null }, right: { val: -5, left: null, right: null } });
