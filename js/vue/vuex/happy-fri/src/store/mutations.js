const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
export default {
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  // 记录答案
  [REMEMBER_ANSWER] (state, id) {
    state.answerId.push(id)
  }
}