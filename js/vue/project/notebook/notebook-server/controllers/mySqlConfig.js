const mysql = require('mysql')
const config = require('./defaultConfig')
const { dataBase } = require('./defaultConfig')

// 连接线程池
let pool = mysql.createPool({
  host: dataBase.HOST,
  user: dataBase.USERNAME,
  password: dataBase.PASSWORD,
  database: dataBase.DATABASE,
  port: dataBase.PORT
})

let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
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
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}"`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 用户注册
let userRegister = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value)
}

// 根据分类查找文章列表
let findNoteListByType = function (note_type) {
  let _sql = `select * from note where note_type="${note_type}";`
  return allServices.query(_sql)
}

// 根据文章id查找文章详情
let findNoteDetailById = function (id) {
  let _sql = `select * from note where id="${id}";`
  return allServices.query(_sql)
}

// 插入笔记
let insertAll = function (id) {
  let _sql = `select * from note where id="${id}";`
  return allServices.query(_sql)
}

module.exports = {
  userLogin,
  findUser,
  userRegister,
  findNoteListByType,
  findNoteDetailById
}