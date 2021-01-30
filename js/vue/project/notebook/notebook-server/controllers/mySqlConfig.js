const mysql = require('mysql')
const config = require('./defaultConfig')
const { dataBase } = require('./defaultConfig')

// 连接线程池
let pool = mysql.createPool({
  host: dataBase.HOST,
  user: dataBase.USERNAME,
  password: dataBase.PASSWORD,
  dataBase: dataBase.DATABASE,
  port: dataBase.PORT
})

let allServices = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}`
  return allServices.query(_sql)
}

module.exports = {
  userLogin
}