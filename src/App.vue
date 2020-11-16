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

      <child v-model:childTitle="parentTitle"> </child>
      {{parentTitle}}
    </section>

  </div>

</template>
<script>
import tododHead from './components/tododHead.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'
import child from './components/child.vue'

export default {
  components: { tododHead, todoList, todoFooter, child },
  data () {
    return {
      parentTitle: '我是父级title'
    }
  }

}

</script>
<style lang="css">
</style>
