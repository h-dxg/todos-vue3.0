<template>
  <div>

    <section class="todoapp">
      <!-- <H1>VUE3.0 TODOS</H1> -->
      <!-- 头部 -->
      <tododHead></tododHead>

      <!-- 列表部分 -->
      <todoList></todoList>

      <!-- 底部 -->
      <todoFooter></todoFooter>
    </section>

  </div>

</template>
<script>
import tododHead from './components/tododHead.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'



export default {
  components: { tododHead, todoList, todoFooter },

}

</script>
<style lang="css">
</style>
