const addLog = {
  updated () {
    console.log('数据发生变化')
  }
}

const app = {
  created () {
    console.log('扩展created')
  }
}

module.exports = { addLog, app }
