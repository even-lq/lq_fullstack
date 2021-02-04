const { findNoteListByType, findNoteDetailById } = require('./mySqlConfig')

const findNoteList = async (ctx, next) => {
  let note_type = ctx.request.body.note_type
  await findNoteListByType(note_type).then(async (res) => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
}

const findNoteDetail = async (ctx, next) => {
  let id = ctx.request.body.note_id
  await findNoteDetailById(id).then(async (res) => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
}
module.exports = {
  findNoteList,
  findNoteDetail
}