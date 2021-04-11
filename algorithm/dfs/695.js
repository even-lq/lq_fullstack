// DFS 深度优先遍历算法 + 沉岛策略
// 采用递归的方法遍历所有面积为1的岛屿
// 递归出口：数组越界，岛屿面积为0
// 防止重复遍历：在计算面积前存储面积变量，然后将该岛屿置0，在进行下一次递归
var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j))
      }
    }
  }
  return maxArea
};

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
    return 0
  }

  let area = 1
  grid[i][j] = 0
  area += dfs(grid, i + 1, j)
  area += dfs(grid, i - 1, j)
  area += dfs(grid, i, j + 1)
  area += dfs(grid, i, j - 1)
  return area
}
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));

// 来源：力扣（LeetCode）
//   链接：https://leetcode-cn.com/problems/max-area-of-island
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。