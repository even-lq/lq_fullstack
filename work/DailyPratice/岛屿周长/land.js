var grid = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]
const ONE = 1
var islandPerimeter = function (grid) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] != 0) {
        stack.push(4)
        count ++ 
      }
    }
  }
  stack.push(-count)
    // console.log(stack);
  };
  islandPerimeter(grid);