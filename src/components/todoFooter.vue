<template >
  <div>
    <footer
      class="footer"
      v-if="len.length>0"
    >
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{state.left}}</strong> item left</span>

      <!-- Hidden if no completed items are left ↓ -->
      <button
        class="clear-completed"
        @click="clearCompleted"
      >Clear completed</button>
    </footer>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  computed,
  watchEffect,
  watch
} from 'vue'
import store from '@/store'
import {
  mapState
} from 'vuex'
export default {
  setup (props, context) {
    let state = reactive({
      // a: store.state.list.todoList,
      a: store.getters.listL,
      left: '0'
    })
    const len = ref([])
    watch(state.a, (count, prevcount) => {
      len.value = count
      state.left = state.a.filter(i => i.done === false).length
    })
    // 清空已完成
    let clearCompleted = () => {
      let r = state.a.filter(i => i.done === false)
      console.log(r, 'rrr')
      store.commit("SET_Clear", r);
    }
    return {
      watchEffect,
      state,
      len,
      clearCompleted
    }
  }
  // computed: {
  //   ...mapState({
  //     todoList: state => state.list.todoList,
  //   })
  // },
}
</script>