<template>
  <header class="header">
    <h1>VUE3.0 </h1>
    <input
      v-model="input"
      @keyup.enter="addTodo"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<script>
import {
  ref,
  reactive
} from 'vue'
import store from '@/store'
export default {
  setup (props, context) {
    // // ref 监听简单类型 
    const input = ref('')
    let addTodo = () => {
      const text = input.value && input.value.trim()
      if (text.length > 0) {
        store.commit("SET_H", text);
        input.value = ''
      }
    }
    return {
      input,
      addTodo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
