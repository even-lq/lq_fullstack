// 密码加密解密

const bcrypt = require('bcrypt')

// saltTimes 加盐次数
// 加密
const encrypt = async (password, saltTimes) => {
  const hash = await bcrypt.hash(password, saltTimes)
  return hash
}

// 解密: 原密码与加密过后的密码比较
const validate = async (password, hash) => {
  const match = await bcrypt.compare(password, hash)
  return match
}

module.exports = {
  encrypt,
  validate
}
