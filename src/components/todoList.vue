<template >
  <div>
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="(i,index) in todoList"
          :key="index"
          :class="{completed:i.done ,editing:index==editId}"
        >
          <div class="view">
            <input
              :checked='i.done'
              class="toggle"
              type="checkbox"
              @input="changeInput(index)"
            />
            <label @dblclick="showEdit(index)">{{i.name}}</label>
            <button
              class="destroy"
              @click='deleteTodo(index)'
            ></button>
          </div>
          <input
            class="edit"
            v-model='i.name'
            @keyup.enter='hideEdit'
          />
        </li>
      </ul>
    </section>

  </div>
</template>
<script>
import {
  ref,
  reactive,
  computed,
  toRaw, watchEffect
} from 'vue'
import { useStore } from "vuex";
import store from '@/store'
import {
  mapState
} from 'vuex'
export default {
  setup (props, context) {
    const editId = ref(-1)
    // 双击输入框
    let showEdit = (index) => {
      editId.value = index
    }
    // 输入前勾选状态改变
    let changeInput = (index) => {
      store.commit("SET_List", index);
    }
    // 修改完成 改变编辑状态
    let hideEdit = () => {
      editId.value = -1
    }
    // 删除
    let deleteTodo = (index) => {
      store.commit("SET_delList", index);
    }
    watchEffect(() => {
      // console.log(todoList, '   todoList.value')
      // input.value = todoList.value
    })
    return {
      showEdit,
      editId,
      hideEdit,
      changeInput,
      deleteTodo
    }
  },
  computed: {
    ...mapState({
      todoList: state => state.list.todoList,
    })
  },
}
</script>