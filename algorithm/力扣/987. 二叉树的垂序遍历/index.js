"use strict";
exports.__esModule = true;
function verticalTraversal(root) {
    if (!root)
        return [];
    var min = Math.min();
    var obj = {};
    var queue = [];
    queue.push(root);
    function collection(x) {
        if (!queue.length)
            return;
        var node = queue.shift();
        x < min && (min = x);
        if (!obj[x])
            obj[x] = [];
        obj[x].push(node.val);
        if (node.left) {
            queue.push(node.left);
            var y = x - 1;
            collection(y);
        }
        if (node.right) {
            queue.push(node.right);
            var y = x + 1;
            collection(y);
        }
    }
    collection(0);
    var result = [];
    Object.keys(obj).forEach(function (item) {
        result[+item - min] = obj[item];
    });
    return result;
}
;
verticalTraversal({
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
});
