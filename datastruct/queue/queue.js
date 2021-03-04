const queue = []
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')
while (queue.length) {
  const top = queue[0]
  queue.shift()
}