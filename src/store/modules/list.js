/*
 * @Author: your name
 * @Date: 2020-08-19 09:30:10
 * @LastEditTime: 2020-08-20 12:16:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \online-ui\src\store\modules\approval.js
 */

const list = {
  state: {
    todoList: []
  },
  mutations: {
    SET_H: (state, res) => {
      state.todoList.push({
        name: res,
        done: false
      })
    },
    SET_List: (state, res) => {
      let list = state.todoList.find((i, index) => index === res)
      list.done = !list.done
    },
    SET_delList: (state, res) => {
      state.todoList.splice(res, 1)
      // 数组赋值无效果
      // state.todoList = [...state.todoList.filter((i, index) => { return index !== res })]
    },
    SET_Clear: (state, res) => {
      // state.todoList = []
      // console.log(state.index, ' state.index')
      state.todoList.splice(0, state.todoList.length, ...res)

    }

  },
  getter: {
    listL: (state) => {
      return state.todoList
    },
  },
  actions: {

  }
}

export default list
