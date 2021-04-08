function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = []
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i])

    }
    if (asteroids[i] < 0) {


      while (stack.length) {
        if (stack[stack.length - 1] > -asteroids[i]) {
          break
        } else {
          if (stack[stack.length - 1] > 0) {
            stack.pop()
          } else {
            break
          }

        }
      }
    }
    if (!stack.length || stack[stack.length - 1] < 0) {
      stack.push(asteroids[i])


    }
  }
  return stack
};

console.log(asteroidCollision([-2, -1, 1, 2]));
