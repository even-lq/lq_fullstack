function leastInterval(tasks: string[], n: number): number {
  let res = 0
  let target: Record<string, number> = {}
  for (let i = 0; i < tasks.length; i++) {
    if (target[tasks[i]] === undefined) {
      target[tasks[i]] = 0
    }
    target[tasks[i]]++
  }
  let sortTarget = Object.entries(target).sort((a, b) => a[1] - b[1])



};